import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import { LoginHandle } from './pages/Login';
import { DataTableDemo } from './payments/Page';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" Component={Landing}></Route>
          <Route path="/login" Component={LoginHandle}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path='/p' Component={DataTableDemo}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
