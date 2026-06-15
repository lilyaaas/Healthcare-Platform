import { Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";

const AppRoutes = () => {
  return (
    <div className="">
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
