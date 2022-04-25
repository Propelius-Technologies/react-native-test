import Home from './src/screens/Home'
import {theme} from "./src/theme";
import {ThemeProvider} from "react-native-elements";

export default function App() {

  return (
      <>
        {/*// @ts-ignore */}
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      </>
  );
}
