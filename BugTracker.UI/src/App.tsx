import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="main">
            <Routes>
              <Route element={<Projects />} path="/projects" />
            </Routes>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
