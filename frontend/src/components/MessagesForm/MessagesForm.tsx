import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Send } from '@mui/icons-material';
import { IMessageInput } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { axiosApi } from '@/axiosApi';

const initialState: IMessageInput = {
  author: '',
  message: '',
};

const MessagesForm = () => {
  const [message, setMessage] = useState<IMessageInput>(initialState);

  const mutation = useMutation({
    mutationFn: async () => {
      await axiosApi.post('/messages', message);
    },
    onSuccess: () => {
      setMessage(initialState);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutation.mutateAsync();
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" sx={{ p: 5 }}>
        <Grid item sx={{ mb: 2 }}>
          <TextField
            required
            id="author"
            label="Author"
            name="author"
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid container item justifyContent="space-between" alignItems="center">
          <TextField
            required
            id="message"
            label="Message"
            name="message"
            onChange={inputChangeHandler}
            sx={{ maxWidth: '75%' }}
          />
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<Send />}
            disabled={mutation.isPending}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessagesForm;
