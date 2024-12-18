import { InputBase, styled } from "@mui/material";

  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: theme.spacing(4),
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));

  export default StyledInputBase;