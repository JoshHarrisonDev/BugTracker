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
import { Route, Routes, useNavigate, useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
type Props = {
  handleOpenCreateProject: () => void;
  handleCloseCreateProject: () => void;
  handleCreateIssueOpen: () => void;
  handleCreateIssueClose: () => void;
};

const Navbar = ({ handleOpenCreateProject, handleCloseCreateProject, handleCreateIssueClose, handleCreateIssueOpen }: Props) => {
  const navigate = useNavigate();

  const openCreateProject = () => {
    navigate("/create");
  };
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
            <Link href="/">
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link onClick={handleCloseCreateProject} className="navbar-link" href="Projects">
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
            <Route
              element={
                <ListItem disablePadding>
                  <ListItemButton onClick={handleCreateIssueOpen}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText className="navbar-primary" primary="Create Issue" />
                  </ListItemButton>
                </ListItem>
              }
              path="/projects/:id"
            />
          </Routes>
        </List>
      </nav>
    </Box>
  );
};

export default Navbar;
