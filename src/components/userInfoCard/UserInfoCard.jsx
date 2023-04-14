import React from "react";
import "./userInfoCard.scss";
import { Box, Avatar } from "@mui/material";

function UserInfoCard({ user }) {
  console.log(user);
  return (
    <Box>
      <Avatar />
    </Box>
  );
}

export default UserInfoCard;
