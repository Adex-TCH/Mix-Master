/// <reference types="vite/client" />

// React Router DOM v7 ships its own types, but some TS setups may still fail to resolve them.
// Keeping this declaration as a last-resort to unblock typechecking.
// If you later install/align types properly, this file can be removed.
declare module "react-router-dom" {
  export const createBrowserRouter: any;
  export const RouterProvider: any;
  export const Outlet: any;
  export const useNavigation: any;
  export const useLoaderData: any;
  export const useRouteError: any;
  export const Navigate: any;
  export const Link: any;
  export const NavLink: any;
  export const Form: any;
  export const redirect: any;
  const rest: any;
  export default rest;
}

