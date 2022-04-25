import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import {theme} from "src/theme";
import {ThemeProvider} from "react-native-elements";

export default function App() {
  return (
      // <ThemeProvider theme={theme}>
      <Home/>
      // </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
