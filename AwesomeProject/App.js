import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, } from "react-native";
import BgImage from "./assets/bg-image.jpg";
// import { useFonts } from "expo-font";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import Registration from "./screens/RegistrationScreen";
import Login from "./screens/LoginScreen";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };

export default function App() {
  // const [fontsLoaded] = useFonts({
  // "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  // "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  // "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  // });
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.backgroundImage}>
        <Registration />
        {/* <Login /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});