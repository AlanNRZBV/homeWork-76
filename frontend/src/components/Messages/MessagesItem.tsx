import React, {FC} from 'react';
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {IMessagesItem} from "@/types";
import moment from "moment";

const MessagesItem: FC<IMessagesItem> = ({message,author, date}) => {
  const formattedDate = (date: string) => {
    return moment(date).format('MMM Do YY, h:mm:ss a');
  };

  const compareDate = ()=>{
    
  }

  return (
      <Grid item>
        <Card raised={true}>
          <CardHeader title={author} subheader={formattedDate(date)}/>
          <CardContent>
            <Typography>{message}</Typography>
          </CardContent>
        </Card>
      </Grid>
  );
};

export default MessagesItem;