'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { STREAM_API_KEY } from '../constants';
import { tokenProvider } from '../actions/stream.actions';
import { Loader } from '@/components/ui/loader';

interface StreamVideoProviderProps {
  children: ReactNode;
  userId: string;
  userName: string;
  userImage?: string;
}

const StreamVideoProvider = ({ children, userId, userName, userImage }: StreamVideoProviderProps) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (!userId || !STREAM_API_KEY) return;

    const client = new StreamVideoClient({
      apiKey: STREAM_API_KEY,
      user: {
        id: userId,
        name: userName,
        image: userImage,
      },
      tokenProvider: () => tokenProvider(userId),
    });

    setVideoClient(client);
  }, [userId, userName, userImage]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider; 