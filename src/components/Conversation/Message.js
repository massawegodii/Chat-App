import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgType';

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  // Image 
                  return <MediaMsg el={el}/>;
                case "doc":
                  // Document 
                  return <DocMsg el={el}/>;
                case "link":
                  // Link
                  return <LinkMsg el={el}/>;

                case "reply":
                  // Reply 
                  return <ReplyMsg el={el}/>;
                default:
                  // Default message type
                  return <TextMsg el={el}/>;
              }
            default:
              return null;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
