import { faker } from "@faker-js/faker";
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
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import React, { useState } from "react";
import ThemeDialog from "../../sections/settings/ThemeDialog";
import ShortcutsDialog from "../../sections/settings/ShortcutsDialog";

const Settings = () => {
  const theme = useTheme();

  const [openTheme, setOpenTheme] = useState(false);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };

  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left Pane */}
        <Box
          sx={{
            overflowY: "auto", // Use auto for clean scrolling
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            "-ms-overflow-style": "none", // Hide scrollbar in IE/Edge
            "scrollbar-width": "none", // Hide scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar in Chrome/Safari
            },
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>
              <Typography variant="h5">Settings</Typography>
            </Stack>

            {/* Profile */}
            <Stack direction="row" spacing={3}>
              <Avatar
                src={`https://i.pravatar.cc/300?u=${Math.random()}`}
                alt="Random Avatar"
                sx={{ height: 56, width: 56 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">{`${faker.name.firstName()} ${faker.name.lastName()}`}</Typography>
                <Typography variant="body2">{faker.random.words()}</Typography>
              </Stack>
            </Stack>

            {/* List */}
            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => (
                <React.Fragment key={key}>
                  <Stack
                    onClick={onclick}
                    sx={{ cursor: "pointer" }}
                    spacing={2}
                  >
                    <Stack alignItems={"center"} direction="row" spacing={2}>
                      {icon}
                      <Typography variant="body2">{title}</Typography>
                    </Stack>
                    {key !== 7 && <Divider />}
                  </Stack>
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
        </Box>
        {/* Right Pane */}
      </Stack>
      {openTheme && (
        <ThemeDialog open={openTheme} handleClose={handleCloseTheme} />
      )}
      {openShortcuts && (
        <ShortcutsDialog
          open={openShortcuts}
          handleClose={handleCloseShortcuts}
        />
      )}
    </>
  );
};

export default Settings;
