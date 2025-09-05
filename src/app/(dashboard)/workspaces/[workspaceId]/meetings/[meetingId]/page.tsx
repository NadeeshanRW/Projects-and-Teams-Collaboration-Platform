'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/features/meetings/hooks/use-get-call-by-id';
import MeetingSetup from '@/features/meetings/components/meeting-setup';
import MeetingRoom from '@/features/meetings/components/meeting-room';
import StreamVideoProvider from '@/features/meetings/providers/stream-provider';

interface MeetingRoomPageProps {
  params: {
    meetingId: string;
  };
}

const MeetingRoomPage = ({ params }: MeetingRoomPageProps) => {
  const { meetingId } = useParams();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  
  // For now, using a mock user - in a real app, this would come from your auth system
  const mockUser = {
    id: 'user-1',
    name: 'John Doe',
    image: '/images/avatar-1.jpg'
  };

  return (
    <StreamVideoProvider
      userId={mockUser.id}
      userName={mockUser.name}
      userImage={mockUser.image}
    >
      <MeetingRoomContent 
        meetingId={meetingId as string} 
        setIsSetupComplete={setIsSetupComplete}
        isSetupComplete={isSetupComplete}
      />
    </StreamVideoProvider>
  );
};

const MeetingRoomContent = ({ 
  meetingId, 
  setIsSetupComplete, 
  isSetupComplete 
}: { 
  meetingId: string;
  setIsSetupComplete: (value: boolean) => void;
  isSetupComplete: boolean;
}) => {
 const { call, isCallLoading } = useGetCallById(meetingId);

  if (isCallLoading) return <Loader />;

  if (!call) return (
    <div className="flex h-screen w-full items-center justify-center">
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    </div>
  );

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingRoomPage; 