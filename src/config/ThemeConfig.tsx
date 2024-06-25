import { createTheme, ThemeProvider } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import { FC, PropsWithChildren } from "react";

const theme = createTheme({
    palette: {
        // mode: "dark",
        primary: {
            main: purple[500],
        },
        secondary: {
            main: red[500],
        },
    },
});

const ThemeConfig: FC<PropsWithChildren> = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeConfig;
