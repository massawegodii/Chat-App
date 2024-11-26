import React from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
} from "phosphor-react";
import { useDispatch } from "react-redux";

import StyledBadge from "./StyleBadge";

// Styled Chat Box
const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
  },
  scrollbarWidth: "none", // For Firefox
}));

// CallLogElement Component
const CallLogElement = ({ img, name, incoming, missed, online, id }) => {
  const theme = useTheme();

  return (
    <StyledChatBox
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                src={`https://i.pravatar.cc/300?u=${Math.random()}`}
                alt="Random Avatar"
              />
            </StyledBadge>
          ) : (
            <Avatar
              src={`https://i.pravatar.cc/300?u=${Math.random()}`}
              alt="Random Avatar"
            />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Stack spacing={1} alignItems="center" direction={"row"}>
              {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight color={missed ? "red" : "green"} />
              )}
              <Typography variant="caption">Yesterday 21:24</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton>
            <Phone color="green" />
          </IconButton>
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

// CallElement Component
const CallElement = ({ img, name, id, handleClose }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <StyledChatBox
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            src={`https://i.pravatar.cc/300?u=${Math.random()}`}
            alt="Random Avatar"
          />
          <Stack spacing={0.3} alignItems="center" direction={"row"}>
            <Typography variant="subtitle2">{name}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

export { CallLogElement, CallElement };
