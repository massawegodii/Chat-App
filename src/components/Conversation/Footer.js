import React, { useState } from "react";
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from "phosphor-react";
import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOPenActions] = useState(false);
  return (
    <StyledInput
      fullWidth
      placeholder="Write a message"
      variant="filled"
      InputProps={{
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack sx={{ position: "relative", display: openActions ? "inline-block" : "none"}}>
              {Actions.map((el) => (
                <Tooltip placement="right" title={el.title}>
                  <Fab
                  key={el.id}
                  sx={{
                    position: "absolute",
                    top: -el.y,
                    backgroundColor: el.color,
                  }}
                >
                  {el.icon}
                </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={() => setOPenActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>

          
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    "&:before, &:after": {
      display: "none",
    },
  },
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <Stack sx={{ width: "100%" }}>
          {/* Emoji Picker */}
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>

          {/* Chat Input */}
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>

        <Box
          sx={{
            height: 42,
            width: 42,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ width: "100%", height: "100%" }}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
