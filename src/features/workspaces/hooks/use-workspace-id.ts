import { useParams } from "next/navigation";

export const useWorkspaceId = () => {
    const perams = useParams();
    return perams.workspaceId as string;
};