'use client';

import { useGetCalls } from '@/features/meetings/hooks/use-get-calls';

const RecordingsPage = () => {
  // For now, using a mock user - in a real app, this would come from your auth system
  const mockUser = {
    id: 'user-1',
    name: 'John Doe',
    image: '/images/avatar-1.jpeg'
  };

  const { endedCalls, isLoading } = useGetCalls(mockUser.id);

  return (
    <div className="flex size-full flex-col gap-10">
      <h1 className="text-3xl font-bold">
        Meeting Recordings
      </h1>
      <div className="flex flex-col gap-4">
        {isLoading ? (
          <p className="text-lg text-gray-300">Loading recordings...</p>
        ) : endedCalls && endedCalls.length > 0 ? (
          <div className="grid gap-4">
            {endedCalls.map((call) => (
              <div key={call.id} className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">
                  {call.data?.custom?.description || 'Meeting'}
                </h3>
                <p className="text-sm text-gray-600">
                  Ended: {call.state.endedAt ? new Date(call.state.endedAt).toLocaleString() : 'Unknown'}
                </p>
                <p className="text-sm text-gray-600">
                  Duration: {call.state.startsAt && call.state.endedAt 
                    ? Math.round((new Date(call.state.endedAt).getTime() - new Date(call.state.startsAt).getTime()) / 60000)
                    : 'Unknown'} minutes
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-300">
            No recordings available yet. Recordings will appear here after meetings are completed.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecordingsPage; 