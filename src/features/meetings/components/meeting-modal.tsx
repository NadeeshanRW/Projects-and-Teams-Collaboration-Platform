'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
  children?: React.ReactNode;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  buttonIcon,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2">
            {image && (
              <div className="flex justify-center">
                <Image src={image} alt="checked" width={72} height={72} />
              </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
              {title}
            </h1>
          </DialogTitle>
        </DialogHeader>
        {children}
        <Button
          className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {buttonIcon && (
            <Image src={buttonIcon} alt="button icon" width={13} height={13} />
          )}
          &nbsp;
          {buttonText || 'Schedule Meeting'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal; 