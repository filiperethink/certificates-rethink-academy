import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeScreen } from "../screens";

export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
