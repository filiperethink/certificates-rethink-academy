import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CertificateScreen, HomeScreen } from "../screens";

const SomeComp = () => {
  return <div>SomeComp</div>;
};
export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/validate/:id' element={<SomeComp />} />
      </Routes>
    </BrowserRouter>
  );
}
