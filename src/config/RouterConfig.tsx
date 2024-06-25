import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UploadFilePage from "@app/app/UploadFilePage";

const router = createBrowserRouter([{ path: "/", element: <UploadFilePage /> }]);

const RouterConfig = () => <RouterProvider router={router} />;

export default RouterConfig;
