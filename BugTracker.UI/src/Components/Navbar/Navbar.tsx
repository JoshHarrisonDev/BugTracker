import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Link from "../Link/Link";
import "./Navbar.css";
import { Route, Routes } from "react-router";
import AddIcon from "@mui/icons-material/Add";
type Props = {
  handleOpenCreateProject: () => void;
};

const Navbar = ({ handleOpenCreateProject }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 180,
      }}
      className="navbar"
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <Link href="Home">
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="projects">
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <Routes>
            <Route
              element={
                <ListItem disablePadding>
                  <ListItemButton onClick={handleOpenCreateProject}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText className="navbar-primary" primary="Create" />
                  </ListItemButton>
                </ListItem>
              }
              path="/projects"
            />
          </Routes>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenCreateProject}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Navbar;
