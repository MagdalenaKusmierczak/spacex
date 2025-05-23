import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sharedlayout from "./components/Sharedlayout/Sharedlayout";

// Suspense is working well, but you have a lot of content shifts once the "home" page is loaded, due to how images are loaded
// Think how you can optimize that:
// - How to preload images?
// - How to wait until images are loaded?
// Also, should the "home" component (which is displayed just when you enter the page) be lazy loaded?
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const RocketPage = lazy(() => import("./pages/Rocket/RocketPage"));

function App() {
  return (
    // Good usage of routes!
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/rocket/:id" element={<RocketPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
