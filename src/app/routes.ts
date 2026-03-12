import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Overview } from "./components/pages/Overview";
import { Colors } from "./components/pages/Colors";
import { Typography } from "./components/pages/Typography";
import { Spacing } from "./components/pages/Spacing";
import { ComponentsPage } from "./components/pages/ComponentsPage";
import { IconsPage } from "./components/pages/IconsPage";
import { MotionPage } from "./components/pages/MotionPage";
import { GridPage } from "./components/pages/GridPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "colors", Component: Colors },
      { path: "typography", Component: Typography },
      { path: "spacing", Component: Spacing },
      { path: "components", Component: ComponentsPage },
      { path: "icons", Component: IconsPage },
      { path: "motion", Component: MotionPage },
      { path: "grid", Component: GridPage },
    ],
  },
]);
