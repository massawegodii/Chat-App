import { Box, Stack } from "@mui/material";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header*/}
      <Header />

      {/* Msg */}
      <Box sx={{ height: "100%", flexGrow: 1, overflow: "scroll" }}>
        <Message />
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
