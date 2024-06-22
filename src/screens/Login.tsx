import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const { saveToken } = useContext(UserContext);

  const handleLogin = () => {
    saveToken("kjfasdmfkamfkfmakfm");
  };

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>LOGAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
