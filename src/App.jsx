import "./global.scss";
import { AuthProvider } from "./contexts/auth";
import { Routes } from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="558139726183-qi4m23hstlt06s64ettanukj4ks92ma8.apps.googleusercontent.com">
      <AuthProvider>
        <Routes />;
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
