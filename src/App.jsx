import React from "react";
import { Route, Routes } from "react-router-dom";
import Programs from "../Pages/custom/Programs";
import UserProfile from "../Pages/custom/UserProfile";
import Progress from "../Pages/custom/Progress";
import FAQPage from "../Pages/public/FAQPage";
import About from "../Pages/public/About";
import Services from "../Pages/public/Services";
import Home from "../Pages/public/Home";
import User from "../Pages/custom/User";
import Employee from "../Pages/custom/Employee";
import Admin from "../Pages/custom/Admin";
import Form from "../Pages/form/Form";
import Page404 from "../Pages/custom/Page404";
import NameBirth from "../Pages/form/MoreInfo/NameBirth";
import GenderStatus from "../Pages/form/MoreInfo/GenderStatus";
import Address from "../Pages/form/MoreInfo/Address";
import Kin from "../Pages/form/MoreInfo/Kin";
import ProfilePic from "../Pages/form/MoreInfo/ProfilePic";
import ServicesApp from "../Pages/form/MoreInfo/ServicesApp";
import Religion from "../Pages/form/MoreInfo/Religion";
import "./App.css";
import MoreInfo from "../Pages/form/MoreInfo";
import MainForm from "../Pages/form/MainForm";
import ForgotPass from "../Pages/form/ForgotPass";
import Age from "../Pages/form/MoreInfo/Age";

function App() {
  return (
    <Routes>
      {/* <Route element={<Signup />} path="/register" /> */}
      <Route element={<Form />} path="/form/">
        <Route index element={<MainForm />} path="main" />
        <Route element={<MoreInfo />} path="moreinfo/">
          <Route index element={<NameBirth />} path="name&birth" />
          <Route element={<GenderStatus />} path="gender&status" />
          <Route element={<Address />} path="address" />
          <Route element={<Religion />} path="religion&tribe" />
          <Route element={<Kin />} path="kin" />
          <Route element={<ProfilePic />} path="profilepic" />
          <Route element={<ServicesApp />} path="servicesapp" />
          <Route element={<Age />} path="age" />
        </Route>
        <Route element={<ForgotPass />} path="forgotpass" />
      </Route>
      <Route element={<Home />} path="/home" />
      <Route element={<Home />} path="/" />
      <Route element={<FAQPage />} path="/faq" />
      <Route element={<About />} path="/about" />
      <Route element={<Services />} path="/services" />
      <Route element={<User />} path="/patient/:username/">
        <Route element={<UserProfile />} path={`profile`} />
        <Route element={<Progress />} path={`progress`} />
        <Route element={<Programs />} path={`programs`} />
        <Route element={<Page404 />} path="*" />
      </Route>
      {/* <Route element={<Employee />} path="/employee/:username/*" />
      <Route element={<Admin />} path="/admin" /> */}
      <Route element={<Page404 />} path="*" />
    </Routes>
  );
}

export default App;
