import React from 'react'
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import {
    Box,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    useTheme,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";

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
      <StyledInput
        fullWidth
        placeholder="Write a message"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
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
  )
}

export default Footer