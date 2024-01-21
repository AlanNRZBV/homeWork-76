'use client';
import Messages from '@/components/Messages/Messages';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosApi } from '@/axiosApi';

export default function Home() {
  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const response = await axiosApi.get('/messages');
      return response.data;
    },
  });

  return (
    <>
      <Messages
        messages={messages !== undefined ? messages : []}
        isLoading={isLoading}
      />
    </>
  );
}
