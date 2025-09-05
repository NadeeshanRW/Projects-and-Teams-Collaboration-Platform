import MeetingTypeList from '@/features/meetings/components/meeting-type-list';
import StreamVideoProvider from '@/features/meetings/providers/stream-provider';

const MeetingsPage = () => {
  // For now, using a mock user - in a real app, this would come from your auth system
  const mockUser = {
    id: 'user-1',
    name: 'John Doe',
    image: '/images/avatar-1.jpeg'
  };

  return (
    <StreamVideoProvider
      userId={mockUser.id}
      userName={mockUser.name}
      userImage={mockUser.image}
    >
      <div className="flex size-full flex-col gap-10 text-white">
        <h1 className="text-3xl font-bold">
          Meetings
        </h1>
        <MeetingTypeList />
      </div>
    </StreamVideoProvider>
  );
};

export default MeetingsPage; 