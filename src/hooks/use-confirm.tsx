import {  useState } from 'react';

import { Button, type ButtonProps } from "@/components/ui/button";
import { ResponsiveModal } from '@/components/responsive-modal';
import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export const useConfirm = (
title : string, 
massage : string,
variant : ButtonProps["variant"] = "primary"
):[() => JSX.Element, () => Promise<unknown>] => {
 const[promise, setPromise] = useState<{ resolve: (value: boolean) => void } | null>(null);

 const confirm = () => {
    return new Promise((resolve) => {
        setPromise({ resolve });
    });
 };

 const handleCloce = () => {
    setPromise(null);
    };

    const handleConfirm = () => {
        promise?.resolve(true);
        handleCloce();
    };

    const handleCancel = () => {
        promise?.resolve(false);
        handleCloce();
    };

    const ConfirmationDialog = () => (
        <ResponsiveModal open={promise !== null} onOpenChange={handleCloce}>
            <Card className="w-full h-full border-none shadow-none">
                <CardContent className="pt-8">
                    <CardHeader className="p-0">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{massage}</CardDescription>
                    </CardHeader>
                    <div className="pt-4 w-full  flex flex-col  gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
                        <Button onClick={handleCancel} variant="outline" className="w-full lg:w-auto">
                            Cancel 
                        </Button>
                        <Button onClick={handleConfirm} variant={variant} className="w-full lg:w-auto">
                            Confirm
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </ResponsiveModal>
    );

    return [  ConfirmationDialog , confirm ]; 
};