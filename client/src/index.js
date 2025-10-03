import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/home/HomePage.jsx";
import FeaturesPage from "./components/features/FeaturesPage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/signup/Login.jsx";
import { CookiesProvider } from "react-cookie";
import WorkSpacePage from "./components/workspace/WorkSpacePage.jsx";
import WorkSpace from "./components/Workspace2/Workspace.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import WorkSpaceNav1 from "./components/workspace/WorkSpaceNav1.jsx";
import LiveCodeEditor from "./components/projectEditor/LiveCodeEditor.jsx";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const WorkspaceLayout = ({ children }) => (
  <>
    <WorkSpaceNav1 />
    {children}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/features"
            element={
              <MainLayout>
                <FeaturesPage />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutPage />
              </MainLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <MainLayout>
                <Signup />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route
            path="/workspace/*"
            element={
              //<WorkspaceLayout>
              //<WorkSpacePage />
              <WorkSpace />
              //</WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/:project_id/project"
            element={
              // <WorkspaceLayout>
              <LiveCodeEditor />
              //</WorkspaceLayout>
            }
          />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </AuthProvider>
);
