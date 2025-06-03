"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CretaeTaskFormWrapper } from "./create-task-form-wrapper";

export const CreateTaskModal = () => {
    const { isOpen, setIsOpen } = useCreateTaskModal();

    return(
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <CretaeTaskFormWrapper onCancel={close} />
        </ResponsiveModal>
    );
};