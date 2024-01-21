import React from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";

const MessagesItem = () => {
  return (
      <Card>
        <CardHeader title="Author" subheader="Date"/>
        <CardContent>
          <Typography>Some text</Typography>
        </CardContent>
      </Card>
  );
};

export default MessagesItem;