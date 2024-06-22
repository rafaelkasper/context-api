import { ThemeProvider } from "./src/contexts/ThemeContext";
import { UserProvider } from "./src/contexts/UserContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ThemeProvider>
  );
}
