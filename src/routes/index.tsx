import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, ValidateScreen, EmptyScreen } from "../screens";

export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/validate/:id' element={<ValidateScreen />} />
        <Route path='*' element={<EmptyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
