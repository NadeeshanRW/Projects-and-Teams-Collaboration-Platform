import { MoreHorizontal } from "lucide-react";
import { Task } from "../types";
import { TaskActions } from "./task-actions";
import { DottedSeparator } from "@/components/dotted-separator";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { TaskDate } from "./task-date";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";

interface kanbanCardProps {
    task: Task;
};

export const KanbanCard = ({ task }: kanbanCardProps) => {
    return (
        <div className="bg-white p-2.5 rounded shadow-sm shadow-sm space-y-3">
            <div className="flex items-start gap-x-2 justify-between">
                <p className="text-sm line-clamp-2">{task.name}</p>
                <TaskActions id={task.$id}  projectId={task.projectId}>
                <MoreHorizontal className="size-[18px] storke-1 shrink-0 text-neutral-700 hover:opacity-75 transition" />

                </TaskActions>
            </div>
            <DottedSeparator />
            <div className="flex items-center gap-x-1.5" >
                <MemberAvatar 
                name={task.assignee.name}
                fallbackClassName="text-[10px] "
                />
                <div className="size-1 rounded-full bg-neutral-300" />
                <TaskDate value={task.dueDate} className="text-xs" />
            </div>
            <div className="flex items-center gap-x-1.5">
                <ProjectAvatar
                name={task.project.name} 
                image ={task.project.imageUrl}
                fallbackClassName="text-[10px] "
                />
                <span className="text-xs font-medium">{task.project.name}</span>
            </div>
            </div>
    );
};