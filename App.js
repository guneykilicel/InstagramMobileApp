import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Screens from "./Screens";
import { Home } from "./Icons";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>

    // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    //   <Home size={24} fill="red" />
    //   <Text>Merhaba</Text>
    // </View>

  );
}

const styles = StyleSheet.create({
  safe: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
})
