import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, ValidateScreen } from "../screens";

export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/validate/:id' element={<ValidateScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
