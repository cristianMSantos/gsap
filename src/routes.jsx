import { Navigate, useRoutes } from "react-router-dom";
import { Example } from "./pages/Simple/Example.jsx";
import { ScrollTriggerExample } from "./pages/ScrollTriggerExample/index.jsx"

const Router = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Example />
        },
        {
            path: "/scrollTrigger",
            element: <ScrollTriggerExample />
        },
    ])
    return routes;
}

export default Router;