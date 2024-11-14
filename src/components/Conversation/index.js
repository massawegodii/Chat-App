import { Box, Stack } from "@mui/material";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header*/}
      <Header />
      {/* Msg */}

      <Box sx={{ width: "100%", flexGrow: 1 }}></Box>

      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
