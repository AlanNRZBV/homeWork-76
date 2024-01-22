'use client';
import Messages from '@/components/Messages/Messages';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosApi } from '@/axiosApi';
import MessagesForm from '@/components/MessagesForm/MessagesForm';
import { Box } from '@mui/system';

export default function Home() {

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const response = await axiosApi.get('/messages');
      return response.data;
    },
    refetchInterval: 5000,
  });

  return (
    <>
      <Box display="flex" flexDirection="column" height="100%">
        <Messages
          messages={messages !== undefined ? messages : []}
          isLoading={isLoading}
        />
        <MessagesForm />
      </Box>
    </>
  );
}
