'use client';
import Messages from '@/components/Messages/Messages';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { axiosApi } from '@/axiosApi';
import MessagesForm from '@/components/MessagesForm/MessagesForm';
import { Box } from '@mui/system';
import { IMessagesItem } from '@/types';

export default function Home() {
  const [url, setUrl] = useState<string>('/messages');
  const [firstMessages, setFirstMessages] = useState<IMessagesItem[]>([]);

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const response = await axiosApi.get(url);
      return response.data;
    },
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (url === '/messages') {
      setFirstMessages(messages);
    } else if (url !== '/messages' && messages.length !== 0) {
      setFirstMessages(messages);
    }
  }, [messages, url]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      setUrl(
        (prevState) =>
          `/messages?datetime=${messages[messages.length - 1].date}`,
      );
    }
  }, [messages]);

  return (
    <>
      <Box display="flex" flexDirection="column" height="100%">
        <Messages
          messages={firstMessages !== undefined ? firstMessages : []}
          isLoading={isLoading}
        />
        <MessagesForm />
      </Box>
    </>
  );
}
