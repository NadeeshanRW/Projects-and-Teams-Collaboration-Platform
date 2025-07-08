import { AlertTriangle } from "lucide-react";

interface PageErrorProps {
    message: string;
}

export const PageError = ({ 
    message = "An unexpected error occurred",
}: PageErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <AlertTriangle className="size-6 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground font-medium">
                {message} </p>
                </div>
    );
};