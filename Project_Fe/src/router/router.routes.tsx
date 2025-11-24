import { Home } from "@pages";
import { PATH_BASE, PATH_REGISTER_BUY_TAB } from "./router.paths";
import { IRoute } from "@interfaces/route";
import { RegisterBuyTab } from "@components/layout/components/RegisterBuyTab";

export const routes: IRoute[] = [
  {
    path: PATH_BASE,
    element: <Home />
  },
  // {
  //   path: PATH_REGISTER_LAYOUT,
  //   element: <ResgisterLayout />
  // },
  {
    path: PATH_REGISTER_BUY_TAB,
    element: <RegisterBuyTab />
  }
];
