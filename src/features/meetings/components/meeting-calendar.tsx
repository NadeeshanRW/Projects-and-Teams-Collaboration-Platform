'use client';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useGetCalls } from '../hooks/use-get-calls';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface MeetingCalendarProps {
  userId: string;
}

const MeetingCalendar = ({ userId }: MeetingCalendarProps) => {
  const { upcomingCalls, isLoading } = useGetCalls(userId);

  const events = upcomingCalls?.map((call) => ({
    id: call.id,
    title: call.data?.custom?.description || 'Meeting',
    start: new Date(call.state.startsAt || Date.now()),
    end: new Date(call.state.startsAt || Date.now()),
    resource: call,
  })) || [];

  if (isLoading) {
    return <div>Loading calendar...</div>;
  }

  return (
    <div className="h-[600px] w-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: '#3b82f6',
            borderRadius: '4px',
          },
        })}
        onSelectEvent={(event) => {
          // Navigate to meeting room
          window.open(`/workspaces/default/meetings/${event.id}`, '_blank');
        }}
      />
    </div>
  );
};

export default MeetingCalendar; 