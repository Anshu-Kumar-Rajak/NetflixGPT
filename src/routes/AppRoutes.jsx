import { createBrowserRouter } from "react-router";
import AppLayout from "../layouts/appLayout";
import HomePage from "../pages/HomePage";

const AppRoutes = createBrowserRouter([
    {
        path : "/",
        Component : AppLayout,
        children : [
          {
            index : true,
            Component : HomePage
          },
    ]
    }
])

export default AppRoutes;