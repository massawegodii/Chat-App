import { Box, Grid, IconButton, Stack, Tabs, Tab, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINK } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgType";

const StarredMessages = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, maxHeight: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared</Typography>
          </Stack>
        </Box>

        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "auto",
          }}
          spacing={3}
          padding={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              // Images
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[...Array(9)].map((_, index) => (
                      <Grid item xs={4} key={index}>
                        <img
                          src={faker.image.city()}
                          alt={faker.internet.userName()}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 8,
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
                case 1:
                return SHARED_LINK.map((el) => <LinkMsg el={el} />);

              case 2:
                return SHARED_DOCS.map((el) => <DocMsg el={el} />);
              default:
                return null;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
