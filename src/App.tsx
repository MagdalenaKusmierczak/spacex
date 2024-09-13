import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sharedlayout from "./components/Sharedlayout/Sharedlayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        {/* <Route index element={<HomePage />} />
        <Route path="/rocket/:id" element={<RocketPage />}> */}
      </Route>
    </Routes>
  );
}

export default App;
