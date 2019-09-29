import { homePageComponent } from "./pages/home-page.component";
import { topRatedPageComponent } from "./pages/top-rated-page.component";
import { notFound } from "./common/not-found.component";

export const appRoutes = [
  {
    path: "",
    component: homePageComponent
  },
  {
    path: "top-rated",
    component: topRatedPageComponent
  },
  {
    path: "**",
    component: notFound
  }
];
