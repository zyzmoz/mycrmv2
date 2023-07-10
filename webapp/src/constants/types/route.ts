import { SvgIconComponent } from "@mui/icons-material";
import React from "react";

export type TRoute = {
  path: string;
  label?: string;
  Element: React.FC;
  RouteIcon: SvgIconComponent;
};

export type TRoutes = TRoute[];
