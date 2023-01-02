import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React from "react";
import { Board } from "./Components/Board/Board";

const queryClient = new QueryClient();

function App() {
  const [isCreateProjectOpen, setisCreateProjectOpen] = React.useState(false);

  const [isCreateIssueOpen, setisCreateIssueOpen] = React.useState(false);

  const handleCreateProjectOpen = () => {
    setisCreateProjectOpen(true);
  };

  const handleCreateProjectClose = () => {
    setisCreateProjectOpen(false);
  };

  const handleCreateIssueOpen = () => {
    setisCreateIssueOpen(true);
  };

  const handleCreateIssueClose = () => {
    setisCreateIssueOpen(false);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Navbar
            handleCloseCreateProject={handleCreateProjectClose}
            handleOpenCreateProject={handleCreateProjectOpen}
            handleCreateIssueOpen={handleCreateIssueOpen}
            handleCreateIssueClose={handleCreateIssueClose}
          />
          <div className="main">
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route
                element={
                  <Projects
                    handleClickOpen={handleCreateProjectOpen}
                    handleClose={handleCreateProjectClose}
                    isCreateProjectOpen={isCreateProjectOpen}
                  />
                }
                path="/projects"
              />

              <Route
                path="projects/:id"
                element={
                  <Board
                    isCreateIssueOpen={isCreateIssueOpen}
                    handleCreateIssueOpen={handleCreateIssueOpen}
                    handleCreateIssueClose={handleCreateIssueClose}
                  ></Board>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
