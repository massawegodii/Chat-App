import React from 'react'
import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import {
    CaretDown,
    MagnifyingGlass,
    Phone,
    VideoCamera,
  } from "phosphor-react";
import StyledBadge from '../StyleBadge';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
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
    <Stack
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ width: "100%", height: "100%" }}
    >
      <Stack onClick={() => {
        dispatch(ToggleSidebar());
      }} direction={"row"} spacing={2}>
        <Box>
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
        </Box>
        <Stack spacing={0.2}>
          <Typography variant="subtitle2">Godfrey</Typography>
          <Typography variant="caption">Online</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <IconButton>
          <VideoCamera />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton>
          <MagnifyingGlass />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton>
          <CaretDown />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
  )
}

export default Header