'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';

import MeetingCard from './meeting-card';
import MeetingModal from './meeting-modal';
import { meetingTypes } from '../constants';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ReactDatePicker from 'react-datepicker';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!client) return;
    try {
      const id = uuidv4();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      
      const startsAt = values.dateTime.toISOString();
      const description = values.description || 'Instant Meeting';
      
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      
      setCallDetail(call);
      
      // For instant meetings, redirect immediately
      if (meetingState === 'isInstantMeeting') {
        router.push(`/workspaces/default/meetings/${call.id}`);
      }
      
      toast.success('Meeting Created');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create Meeting');
    }
  };

  if (!client) return <div>Loading...</div>;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/workspaces/default/meetings/${callDetail?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {meetingTypes.map((meeting) => (
        <MeetingCard
          key={meeting.variant}
          title={meeting.title}
          description={meeting.description}
          icon={meeting.icon}
          className={meeting.className}
          handleClick={() => {
            if (meeting.variant === 'instant') {
              setMeetingState('isInstantMeeting');
            } else if (meeting.variant === 'join') {
              setMeetingState('isJoiningMeeting');
            } else if (meeting.variant === 'schedule') {
              setMeetingState('isScheduleMeeting');
            } else if (meeting.variant === 'calendar') {
              router.push('/workspaces/default/meetings/calendar');
            } else if (meeting.variant === 'recordings') {
              router.push('/workspaces/default/meetings/recordings');
            }
          }}
        />
      ))}

      {!callDetail ? (
         <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success('Link Copied');
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => {
          if (values.link) {
            router.push(values.link);
          } else {
            toast.error('Please enter a valid meeting link');
          }
        }}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList; 