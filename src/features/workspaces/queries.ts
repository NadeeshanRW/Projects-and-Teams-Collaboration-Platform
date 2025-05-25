

import { Query } from "node-appwrite";

import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";
import { getMember } from "@/features/members/utils";
import { workspace } from "./types";
import { createSessionClient } from "@/lib/appwrite";

 export const getWorkspaces = async () => {

   
        const { databases , account} =  await createSessionClient();
            const user = await account.get();

            const members = await databases.listDocuments(
                DATABASE_ID,
                MEMBERS_ID,
                [Query.equal("userId",user.$id)]
             );
        
             if (members.total === 0) {
                return  { documents: [], total: 0 } ;
                }
            
            const workspaceIds = members.documents.map((member) => member.workspaceId);
        
            const workspaces = await databases.listDocuments(
                DATABASE_ID,
                WORKSPACES_ID,
             [
                Query.orderDesc("$createdAt"),
                Query.contains("$id", workspaceIds)
             ],  
            );

            return workspaces;     
 };

interface GetWorkspacesProps{
   workspaceId: string;
};

export const getWorkspace = async ({ workspaceId }: GetWorkspacesProps) => {
   
    const { databases, account } = await createSessionClient();

     const user = await account.get();
 
     const member = await getMember({
       databases,
       userId: user.$id,
       workspaceId,
     });
 
     if (!member) {
       throw new Error("Unauthorized");
     }
 
     const workspace = await databases.getDocument<workspace>(
       DATABASE_ID,
       WORKSPACES_ID,
       workspaceId,
     );
 
     return workspace;
   
 };

 interface GetWorkspacesInfoProps{
   workspaceId: string;
};

export const getWorkspaceInfo = async ({ workspaceId }: GetWorkspacesInfoProps) => {
 
    const { databases } = await createSessionClient();

    const workspace = await databases.getDocument<workspace>(
       DATABASE_ID,
       WORKSPACES_ID,
       workspaceId,
     );
 
     return {
      name: workspace.name,
     };
 };