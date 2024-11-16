import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgType';

const Message = ({menu}) => {
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
                  return <MediaMsg el={el} menu={menu}/>;
                case "doc":
                  // Document 
                  return <DocMsg el={el} menu={menu}/>;
                case "link":
                  // Link
                  return <LinkMsg el={el} menu={menu}/>;

                case "reply":
                  // Reply 
                  return <ReplyMsg el={el} menu={menu}/>;
                default:
                  // Default message type
                  return <TextMsg el={el} menu={menu}/>;
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
