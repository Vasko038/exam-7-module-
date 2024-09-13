import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Loading from "./components/Loading";
import { Spin } from "antd";
const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spin />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Navigate to="/page1" />
          </Suspense>
        ),
      },
      {
        element: (
          <Suspense fallback={<Loading />}>
            <Page1 />
          </Suspense>
        ),
        path: "page1",
      },
      {
        element: (
          <Suspense fallback={<Loading />}>
            <div>fsdfsdf</div>
          </Suspense>
        ),
        path: "page1/:id",
      },
      {
        element: (
          <Suspense fallback={<Loading />}>
            <Page2 />
          </Suspense>
        ),
        path: "page2",
      },
    ],
  },
  {},
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
