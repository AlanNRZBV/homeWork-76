import React, { FC, useState } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { IMessagesItem } from '@/types';
import moment from 'moment';

const MessagesItem: FC<IMessagesItem> = ({ message, author, date }) => {
  const compareDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const convertedYesterday = yesterday.toISOString();

    const thisYear = new Date().getFullYear();

    if (date.slice(0, 10) === convertedYesterday.slice(0, 10)) {
      return 'Yesterday';
    } else if (thisYear !== parseInt(date.slice(0, 16))) {
      return moment(date).format('MMM Do YY, h:mm a');
    } else {
      return moment(date).format('MMM Do, h:mm a');
    }
  };

  compareDate();

  return (
    <Grid item>
      <Card raised={true}>
        <CardHeader title={author} subheader={compareDate()} />
        <CardContent>
          <Typography>{message}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MessagesItem;
