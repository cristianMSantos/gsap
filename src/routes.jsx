import { Navigate, useRoutes } from "react-router-dom";
import { Example } from "./pages/Simple/Example.jsx";
import { ScrollTriggerExample } from "./pages/ScrollTriggerExample/index.jsx";
import { CodeCase } from "./pages/CodeCase/index.jsx";
import Layout from "./components/Layout/index.jsx";

const Router = () => {
  const routes = useRoutes([
    // {
    //     path: "/",
    //     element: <Example />
    // },
    {
      path: "/scrollTrigger",
      element: <ScrollTriggerExample />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <CodeCase />,
          index: true,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
