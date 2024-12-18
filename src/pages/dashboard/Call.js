import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, Phone, Plus } from "phosphor-react";
import React, { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}

        <Box
            sx={{
              overflowY: "scroll",
              height: "100vh",
              width: 340,
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? "#F8FAFF"
                  : theme.palette.background,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              // For Chrome, Edge, Safari
              "&::-webkit-scrollbar": {
                display: "none",
              },
              // For Firefox
              scrollbarWidth: "none",
              // Ensure no borders caused by overflow
              overflow: "-moz-scrollbars-none",
            }}
          >

          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="h5">Call Log</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>

            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
            >
              <Typography variant="subtitle2" sx={{}} component={Link}>
                Start a conversation
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
              {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
              <Stack spacing={2.4}>
                {CallLogs.map((el, idx) => {
                  return <CallLogElement key={idx} {...el} />;
                })}
              </Stack>
              {/* </SimpleBarStyle> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
