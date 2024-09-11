import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "../Pages/universal/public.css";
import "./App.css";
import Navbar from "../Pages/universal/Navbar";
import Loading from "../assets/Loading";
const Programs = lazy(() => import("../Pages/custom/Programs"));
const UserProfile = lazy(() => import("../Pages/custom/UserProfile"));
const Progress = lazy(() => import("../Pages/custom/Progress"));
const FAQPage = lazy(() => import("../Pages/public/FAQPage"));
const About = lazy(() => import("../Pages/public/About"));
const Services = lazy(() => import("../Pages/public/Services"));
const Home = lazy(() => import("../Pages/public/Home"));
const User = lazy(() => import("../Pages/custom/User"));
// import Employee from "../Pages/custom/Employee";
// import Admin from "../Pages/custom/Admin";
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

function App() {
  // const [loading, setLoading] = useState(true);
  // document.addEventListener("DOMContentLoaded", (e) => {
  //   setLoading(false);
  // });
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
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Loading />}>
                <FAQPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<Loading />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Page404 />
              </Suspense>
            }
          />

          <Route
            path="/form"
            element={
              <Suspense fallback={<Loading />}>
                <Form />
              </Suspense>
            }
          >
            <Route
              path="main"
              element={
                <Suspense fallback={<Loading />}>
                  <MainForm />
                </Suspense>
              }
            />
            <Route
              path="forgotpass"
              element={
                <Suspense fallback={<Loading />}>
                  <ForgotPassChange />
                </Suspense>
              }
            />
            <Route
              path="moreinfo"
              element={
                <Suspense fallback={<Loading />}>
                  <MoreInfo />
                </Suspense>
              }
            >
              <Route
                path="name&birth"
                element={
                  <Suspense fallback={<Loading />}>
                    <NameBirth />
                  </Suspense>
                }
              />
              <Route
                path="gender&status"
                element={
                  <Suspense fallback={<Loading />}>
                    <GenderStatus />
                  </Suspense>
                }
              />
              <Route
                path="address"
                element={
                  <Suspense fallback={<Loading />}>
                    <Address />
                  </Suspense>
                }
              />
              <Route
                path="religion&tribe"
                element={
                  <Suspense fallback={<Loading />}>
                    <Religion />
                  </Suspense>
                }
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
                element={
                  <Suspense fallback={<Loading />}>
                    <ProfilePic />
                  </Suspense>
                }
              />
              <Route
                path="servicesapp"
                element={
                  <Suspense fallback={<Loading />}>
                    <ServicesApp />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          <Route
            path="/patient/:username"
            element={
              <Suspense fallback={<Loading />}>
                <User />
              </Suspense>
            }
          >
            <Route
              path="profile"
              element={
                <Suspense fallback={<Loading />}>
                  <UserProfile />
                </Suspense>
              }
            />
            <Route
              path="progress"
              element={
                <Suspense fallback={<Loading />}>
                  <Progress />
                </Suspense>
              }
            />
            <Route
              path="programs"
              element={
                <Suspense fallback={<Loading />}>
                  <Programs />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
