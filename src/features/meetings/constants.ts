export const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY || "v42cpqn2ufte";
export const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY || "zppxd9x5zbebm8r7vqbfvgsg62qhkdwq7zc4w7m3pc7jkknzkf9xuhw9xu35qv4a";

export const meetingTypes = [
  {
    title: "New Meeting",
    description: "Start an instant meeting",
    icon: "/icons/add-meeting.svg",
    className: "bg-orange-1",
    variant: "instant" as const,
  },
  {
    title: "Join Meeting",
    description: "via invitation link",
    icon: "/icons/join-meeting.svg",
    className: "bg-blue-1",
    variant: "join" as const,
  },
  {
    title: "Schedule Meeting",
    description: "Plan your meeting",
    icon: "/icons/schedule.svg",
    className: "bg-purple-1",
    variant: "schedule" as const,
  },
  {
    title: "Meeting Calendar",
    description: "View scheduled meetings",
    icon: "/icons/calendar.svg",
    className: "bg-green-1",
    variant: "calendar" as const,
  },
  {
    title: "View Recordings",
    description: "Meeting Recordings",
    icon: "/icons/recordings.svg",
    className: "bg-yellow-1",
    variant: "recordings" as const,
  },
];

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
]; 