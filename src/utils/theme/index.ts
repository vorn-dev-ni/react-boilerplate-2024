import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
    status:{
        success:"#677D6A",
        failure:"#8D493A"
    },
    palette:{
        primary:{
            main: colors.blue[800]
        }
    }
})