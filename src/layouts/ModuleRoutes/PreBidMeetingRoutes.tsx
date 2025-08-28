import PreBidMeetingAdd from '@/components/pre-bidmeeting/preBidMeetingAdd';
import PreBidMeetingMain from '@/pages/PreBidMeeting';
import React from 'react';

export const PrebidMeetingRoutes = [
  {
    path: 'pre-bid-meeting',
    element: <PreBidMeetingMain />,
  },
  {
    path: 'pre-bid-meeting/create',
    element: <PreBidMeetingAdd />,
  },
];
