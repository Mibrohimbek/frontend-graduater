import Header from "./Components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import CreateProfile from "./pages/CreateProfile";
import AddExperience from "./pages/Add-Experience";
import AddEducation from "./pages/Add-Education";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardCreate from "./pages/DashboardCreate";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";
import Header_after from "./Components/Header-afrer";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Route>
        <Route element={<Header_after />}>
          <Route path="/add-experience" element={<AddExperience />} />
          <Route path="/add-education" element={<AddEducation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts/>}/>
          <Route
            path="/dashboard-create-profile"
            element={<DashboardCreate />}
          />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/user/:userId" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
