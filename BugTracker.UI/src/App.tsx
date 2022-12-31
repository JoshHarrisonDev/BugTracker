import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React from "react";

const queryClient = new QueryClient();

function App() {
  const [isCreateProjectOpen, setisCreateProjectOpen] = React.useState(false);
  const handleClickOpen = () => {
    setisCreateProjectOpen(true);
  };

  const handleClose = () => {
    setisCreateProjectOpen(false);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Navbar handleOpenCreateProject={handleClickOpen} />
          <div className="main">
            <Routes>
              <Route element={<Projects handleClickOpen={handleClickOpen} handleClose={handleClose} isCreateProjectOpen={isCreateProjectOpen}/>} path="/projects" />
            </Routes>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
