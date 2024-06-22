import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { dark, light } from "../theme/theme";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { theme, toggleSwitch } = useContext(ThemeContext);
  const { saveToken } = useContext(UserContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === "light" ? light.corFundo : dark.corFundo,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    text: {
      color: theme === "light" ? light.corLetra : dark.corLetra,
      fontSize: 40,
    },
    input: {
      height: 50,
      width: "90%",
      padding: 10,
      marginVertical: 20,
      color: theme === "light" ? light.corFundo : dark.corFundo,
      backgroundColor: theme === "light" ? light.corLetra : dark.corLetra,
    },
  });

  const handleLogout = () => {
    saveToken("");
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "light" ? "#220759" : "#ed85ed"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme === "dark"}
      />
      <Text style={styles.text}>HOME</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{ backgroundColor: "darkorange" }}
      >
        <Text style={styles.text}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
