import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  const { token, getToken } = useContext(UserContext);
  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
