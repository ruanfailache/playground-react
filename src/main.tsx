import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

import AppRouter from "@app/config/AppRouter";

import "@app/assets/css/reset.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = document.getElementById("root");

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
    headers: {
        authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2b25AZW5jaWJyYS5jb20iLCJpYXQiOjE3MTkyNDU1NDQsImV4cCI6MTcxOTI2MzU0NH0.4MJ6T_pr3k_-8Urr2iicCk1UZPSmkMh2UamricnRGmc",
    },
});

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

if (root) {
    ReactDOM.createRoot(root).render(
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </ApolloProvider>,
    );
}
