import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";

const App = () => {

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
  return (
    <RouterProvider router={router}/>
  )
}

export default App