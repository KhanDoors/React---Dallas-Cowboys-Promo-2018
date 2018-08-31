import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("featured")}>
          Headline:
        </ListItem>

        <ListItem button onClick={() => scrollToElement("venueNfo")}>
          Date Time Location:
        </ListItem>

        <ListItem button onClick={() => scrollToElement("highlights")}>
          Game Blog:
        </ListItem>

        <ListItem button onClick={() => scrollToElement("pricing")}>
          Team Info:
        </ListItem>

        <ListItem button onClick={() => scrollToElement("location")}>
          Map:
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
