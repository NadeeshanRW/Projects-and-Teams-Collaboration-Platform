import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { sessionMiddleware } from "@/lib/session-middleware";
import { createAdminClient } from "@/lib/appwrite";
import { getMember } from "../utils";
import { DATABASE_ID, MEMBERS_ID } from "@/config";
import { Query } from "node-appwrite";
import { MemberRole } from "../types";

const app = new Hono()
    .get(
        "/",
        sessionMiddleware,
        zValidator("query", z.object({ workspaceId: z.string() })),
        async (c) => {
            const { users } = await createAdminClient();
            const databases =  c.get("databases");
            const user = c.get("user");
            const { workspaceId } = c.req.valid("query");

            const member = await getMember({
                userId: user.$id,
                workspaceId,
                databases,
            });

            if (!member) {
                return c.json({ error: "unauthorized" }, 401);
        }

        const members = await databases.listDocuments(
            DATABASE_ID,
            MEMBERS_ID,
            [Query.equal("workspaceId", workspaceId)],
        );

        const populatedMembers = await Promise.all(
            members.documents.map(async (member) => {
                const user = await users.get(member.userId);

                return {
                    ...member,
                    name: user.name,
                    email: user.email,
                }
            })
        );   

        return c.json({
            data: {
                ...members,
                documents: populatedMembers,
            },
    });
    }
)

.delete(
    "/:memberId",
    sessionMiddleware,
    async (c) => {
    const { memberId } = c.req.param();
    const user = c.get("user");
    const databases = c.get("databases");

    const memberToDelete = await databases.getDocument(
        DATABASE_ID,
        MEMBERS_ID,
        memberId,
    );

    const allMembersInWorkspace = await databases.listDocuments(
        DATABASE_ID,
        MEMBERS_ID,
        [Query.equal("workspaceId", memberToDelete.workspaceId)]
    );

    const member = await getMember({
        userId: user.$id,
        workspaceId: memberToDelete.workspaceId,
        databases,
    });

    if (!member) {
        return c.json({ error: "unauthorized" }, 401);
    }

    if(member.$id !==  memberToDelete.$id && member.role !== MemberRole.ADMIN) {
        return c.json({ error: "unauthorized" }, 401);
    }

    if (allMembersInWorkspace.total === 1) {
        return c.json({ error: "cannot delete last member" }, 400);
    }

    await databases.deleteDocument(
        DATABASE_ID,
        MEMBERS_ID,
        memberId,
    );

    return c.json({ data: { $id: memberToDelete.$id } });
    }
)

.patch(
    "/:memberId",
    sessionMiddleware,
    zValidator("json", z.object({ role: z.nativeEnum(MemberRole) })),
    async (c) => {
    const { memberId } = c.req.param();
    const { role } = c.req.valid("json");
    const user = c.get("user");
    const databases = c.get("databases");

    const memberToUpdate = await databases.getDocument(
        DATABASE_ID,
        MEMBERS_ID,
        memberId,
    );

    const allMembersInWorkspace = await databases.listDocuments(
        DATABASE_ID,
        MEMBERS_ID,
        [Query.equal("workspaceId", memberToUpdate.workspaceId)]
    );

    const member = await getMember({
        userId: user.$id,
        workspaceId: memberToUpdate.workspaceId,
        databases,
    });

    if (!member) {
        return c.json({ error: "unauthorized" }, 401);
    }

    if(member.role !== MemberRole.ADMIN) {
        return c.json({ error: "unauthorized" }, 401);
    }

    if (allMembersInWorkspace.total === 1) {
        return c.json({ error: "cannot downgrade the only member" }, 400);
    }
    
    await databases.updateDocument(
        DATABASE_ID,
        MEMBERS_ID,
        memberId,
        {
            role,
        }
    );

    return c.json({ data: { $id: memberToUpdate.$id } });
    }
)


export default app;