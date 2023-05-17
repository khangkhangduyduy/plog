import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";


export default function App() {
  const user = false; 
  return (
    <BrowserRouter> 
    <TopBar/>
      <Routes>
        
        <Route path="/" element=
        {<Home/>}>
        </Route>

        <Route path="/write" element={user ? <Write/>:<Register/>}></Route>
        <Route path="/register" element={user ? <Home/>:<Register/>}></Route>
        <Route path="/login" element={user ? <Home/>:<Login/>}></Route>
        <Route path="/settings" element={user ? <Settings/>:<Register/>}></Route>
        <Route path="/post/:postId" element=
        {<Single/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
