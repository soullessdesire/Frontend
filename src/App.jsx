//react and react-router-dom imports
import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//base requirement imports
import Navbar from "../Pages/universal/Navbar";
import Loading from "../assets/Loading";
import SuspenseRoute from "../utils/SuspenseRoute";

//public site imports
const FAQPage = lazy(() => import("../Pages/public/FAQPage"));
const About = lazy(() => import("../Pages/public/About"));
const Services = lazy(() => import("../Pages/public/Services"));
const Home = lazy(() => import("../Pages/public/Home"));
const User = lazy(() => import("../Pages/custom/user/User"));

//user site imports
const Programs = lazy(() => import("../Pages/custom/user/Programs"));
const UserProfile = lazy(() => import("../Pages/custom/user/UserProfile"));
const Progress = lazy(() => import("../Pages/custom/user/Progress"));
const Chats = lazy(() => import("../Pages/custom/user/Chats"));

//empolyee site imports
import Employee from "../Pages/custom/employee/Employee";

//admin site imports
import Admin from "../Pages/custom/admin/Admin";

//form site imports
const Form = lazy(() => import("../Pages/form/Form"));
const Page404 = lazy(() => import("../Pages/custom/Page404"));
const NameBirth = lazy(() => import("../Pages/form/MoreInfo/NameBirth"));
const GenderStatus = lazy(() => import("../Pages/form/MoreInfo/GenderStatus"));
const Address = lazy(() => import("../Pages/form/MoreInfo/Address"));
const Kin = lazy(() => import("../Pages/form/MoreInfo/Kin"));
const ProfilePic = lazy(() => import("../Pages/form/MoreInfo/ProfilePic"));
const ServicesApp = lazy(() => import("../Pages/form/MoreInfo/ServicesApp"));
const Religion = lazy(() => import("../Pages/form/MoreInfo/Religion"));
const MoreInfo = lazy(() => import("../Pages/form/MoreInfo"));
const MainForm = lazy(() => import("../Pages/form/MainForm"));
const ForgotPassChange = lazy(() => import("../Pages/form/ForgotPassChange"));

//css imports
import "../Pages/universal/public.css";
import "./App.css";

function App() {
  const [scroll, setScroll] = useState(false);
  const [ul, setUl] = useState(true);
  const [login, setLogin] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const pathnameParts = location.pathname.split("/");
    const isFormPage = pathnameParts[1]?.toLowerCase() === "form";
    const hasDeepPath = pathnameParts.length > 2;
    const userDeepPath = pathnameParts.length === 4;

    setNavbar(!userDeepPath);
    setUl(!hasDeepPath);
    setLogin(!isFormPage && pathnameParts.length <= 3);

    const fNav = document.querySelector(".f_nav");
    if (fNav) {
      fNav.style.backgroundColor = hasDeepPath ? "transparent" : "white";
      fNav.style.position = hasDeepPath ? "static" : "fixed";
    }
  }, [location.pathname]);
  useEffect(() => {
    const scrollChecker = () => {
      if (window.scrollY > 40) {
        setScroll(() => true);
      } else {
        setScroll(() => false);
      }
    };
    window.addEventListener("scroll", scrollChecker);
  }, []);

  return (
    <>
      <>
        {navbar && <Navbar login={login} ul={ul} scroll={scroll} />}

        <Routes>
          {/* Public Pages */}
          <Route path="/home" element={<SuspenseRoute Element={Home} />} />
          <Route path="/faq" element={<SuspenseRoute Element={FAQPage} />} />
          <Route path="/about" element={<SuspenseRoute Element={About} />} />
          <Route
            path="/services"
            element={<SuspenseRoute Element={Services} />}
          />
          <Route path="*" element={<SuspenseRoute Element={Page404} />} />

          {/* Form Pages */}
          <Route path="/form" element={<SuspenseRoute Element={Form} />}>
            <Route path="main" element={<SuspenseRoute Element={MainForm} />} />
            <Route
              path="forgotpass"
              element={<SuspenseRoute Element={ForgotPassChange} />}
            />
            <Route
              path="moreinfo"
              element={<SuspenseRoute Element={MoreInfo} />}
            >
              <Route
                path="name&birth"
                element={<SuspenseRoute Element={NameBirth} />}
              />
              <Route
                path="gender&status"
                element={<SuspenseRoute Element={GenderStatus} />}
              />
              <Route
                path="address"
                element={<SuspenseRoute Element={Address} />}
              />
              <Route
                path="religion&tribe"
                element={<SuspenseRoute Element={Religion} />}
              />
              <Route
                path="kin"
                element={
                  <Suspense fallback={<Loading />}>
                    <Kin />
                  </Suspense>
                }
              />
              <Route
                path="profilepic"
                element={<SuspenseRoute Element={ProfilePic} />}
              />
              <Route
                path="servicesapp"
                element={<SuspenseRoute Element={ServicesApp} />}
              />
            </Route>
          </Route>

          {/* User Pages */}
          <Route
            path="/patient/:username"
            element={<SuspenseRoute Element={User} />}
          >
            <Route
              path="profile"
              element={<SuspenseRoute Element={UserProfile} />}
            />
            <Route
              path="progress"
              element={<SuspenseRoute Element={Progress} />}
            />
            <Route
              path="programs"
              element={<SuspenseRoute Element={Programs} />}
            />
            <Route path="chats" element={<SuspenseRoute Element={Chats} />} />
          </Route>

          {/* Employee Pages */}
          <Route
            path="/employee/:employeeName"
            element={<SuspenseRoute Element={Employee} />}
          ></Route>

          {/* Admin Pages */}
          <Route
            path="/admin/:adminId"
            element={<SuspenseRoute Element={Admin} />}
          ></Route>
        </Routes>
      </>
    </>
  );
}

export default App;
