import { Loader2 } from "lucide-react";

interface LoaderProps {
  size?: number;
  className?: string;
}

export const Loader = ({ size = 24, className }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 size={size} className={`animate-spin ${className || ""}`} />
    </div>
  );
}; 