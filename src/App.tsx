import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<div>not found</div>} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
