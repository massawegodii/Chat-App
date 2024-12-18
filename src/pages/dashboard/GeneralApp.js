import { React } from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}

      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Conversation */}

        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open && (
  (() => {
    switch (sidebar.type) {
      case "CONTACT":
        return <Contact />;
      case "SHARED":
        return <SharedMessages />;
      case "STARRED":
        return <StarredMessages />; 
      default:
        return null;
    }
  })()
)}

    </Stack>
  );
};

export default GeneralApp;
