import * as React from "react";
import Router from "next/router";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function Navigation({ list = [] }) {
  const onClick = (path: string) => {
    Router.push(path);
  };

  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        {list.map((item: any, index) => {
          return (
            <MenuItem key={index} onClick={() => onClick(item.link)}>
              {/* menu image */}
              <ListItemText>{item.label}</ListItemText>
            </MenuItem>
          );
        })}

        <Divider />
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
