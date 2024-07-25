import { ThemeOptions } from "@mui/material/styles";
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      success: string;
      failure:string;

    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      success?: string;
       failure?:string;

    };
  }
}
