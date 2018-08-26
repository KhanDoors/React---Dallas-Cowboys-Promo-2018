import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("start")}>
          Season Starts in:
        </ListItem>

        <ListItem button onClick={() => console.log("schedule")}>
          Schedule Info:
        </ListItem>

        <ListItem button onClick={() => console.log("Game Time")}>
          Game Time:
        </ListItem>

        <ListItem button onClick={() => console.log("Injury Report")}>
          Injury Report:
        </ListItem>

        <ListItem button onClick={() => console.log("tickets")}>
          Ticket Info:
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
