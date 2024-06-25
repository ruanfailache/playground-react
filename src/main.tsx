import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";

import ApolloConfig from "@app/config/ApolloConfig.tsx";
import RouterConfig from "@app/config/RouterConfig.tsx";
import ThemeConfig from "@app/config/ThemeConfig.tsx";

import "@app/assets/css/reset.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = document.getElementById("root");

if (root) {
    ReactDOM.createRoot(root).render(
        <ApolloConfig>
            <ThemeConfig>
                <CssBaseline />
                <RouterConfig />
            </ThemeConfig>
        </ApolloConfig>,
    );
}
