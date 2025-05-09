
import { cookies } from "next/headers";
import { Databases,Client, Query, Account } from "node-appwrite";
import { AUTH_COOKIE } from "@/features/auth/constants";
import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";
import { getMember } from "@/features/members/utils";
import { workspace } from "./types";

 export const getWorkspaces = async () => {

    try{
    const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
    
            const session = await cookies().get(AUTH_COOKIE);
            
            if (!session) return { documents: [], total: 0 } ;
            
            client.setSession (session.value); 
            const databases = new Databases(client);
            const account = new Account(client);
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
    } catch {
        return  { documents: [], total: 0 } ;
    }      
 };

interface GetWorkspacesProps{
   workspaceId: string;
};

export const getWorkspace = async ({ workspaceId }: GetWorkspacesProps) => {
   try {
     const client = new Client()
       .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
       .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
 
     const session = await cookies().get(AUTH_COOKIE);
     if (!session) return null;
 
     client.setSession(session.value);
     const databases = new Databases(client);
     const account = new Account(client);
     const user = await account.get();
 
     const member = await getMember({
       databases,
       userId: user.$id,
       workspaceId,
     });
 
     if (!member) {
       console.log(" Not a member of this workspace");
       return null;
     }
 
     const workspace = await databases.getDocument<workspace>(
       DATABASE_ID,
       WORKSPACES_ID,
       workspaceId,
     );
 
     return workspace;
   } catch (err) {
     console.log("Error in getWorkspace:", err);
     return null;
   }
 };