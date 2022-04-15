import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CertificateScreen, HomeScreen } from "../screens";

export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='certificates' element={<CertificateScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
