import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/style.css"
import Layout from "./Layout";
import Home from "./Home";
import LoginForm from "./Login";
import SignUp from "./SignUp";
import TaskForm from "./TaskForm";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="LogIn" element={<LoginForm/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="TaskForm" element={<TaskForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
