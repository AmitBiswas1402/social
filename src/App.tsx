import "./globals.css";
import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

export default function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout />}>
          {/* private routes  */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}