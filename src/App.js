import { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import { EventsProvider } from "./contexts/EventsContext";
import "./App.css";

const Homepage = lazy(() => import("./pages/Homepage"));
const Account = lazy(() => import("./pages/Account"));
const Settings = lazy(() => import("./pages/Settings"));
const Support = lazy(() => import("./pages/Support"));

function App() {
  return (
    <EventsProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              index
              element={
                <Layout>
                  <Homepage />
                </Layout>
              }
            />
            <Route
              path="account"
              element={
                <Layout>
                  <Account />
                </Layout>
              }
            />
            <Route
              path="settings"
              element={
                <Layout>
                  <Settings />
                </Layout>
              }
            />
            <Route
              path="support"
              element={
                <Layout>
                  <Support />
                </Layout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </EventsProvider>
  );
}

export default App;
