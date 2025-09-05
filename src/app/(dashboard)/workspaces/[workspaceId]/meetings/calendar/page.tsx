import MeetingCalendar from '@/features/meetings/components/meeting-calendar';

const MeetingCalendarPage = () => {
  // For now, using a mock user - in a real app, this would come from your auth system
  const mockUser = {
    id: 'user-1',
    name: 'nadeeeshan',
    image: '/images/avatar-1.jpg'
  };

  return (
    <div className="flex size-full flex-col gap-10">
      <h1 className="text-3xl font-bold">
        Meeting Calendar
      </h1>
      <MeetingCalendar userId={mockUser.id} />
    </div>
  );
};

export default MeetingCalendarPage; 