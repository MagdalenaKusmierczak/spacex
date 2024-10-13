import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sharedlayout from "components/Sharedlayout/Sharedlayout";
const HomePage = lazy(() => import("pages/Home/HomePage"));
const RocketPage = lazy(() => import("pages/Rocket/RocketPage"));

function App() {
  return (
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
