import {
  Rocket,
  Home,
  Star,
  GitBranch,
  Boxes,
  ListChecks,
  Fingerprint,
  Handshake,
  AppWindow,
  Globe,
  SquareDashedBottomCode,
  Blocks,
  FolderGit2,
  Infinity,
  BookCheck,
  UserCog,
} from "lucide-react";

export const sidebarIconMap = {
  Rocket,
  Home,
  Star,
  GitBranch,
  Boxes,
  ListChecks,
  Fingerprint,
  Handshake,
  AppWindow,
  Globe,
  SquareDashedBottomCode,
  Blocks,
  FolderGit2,
  Infinity,
  BookCheck,
  UserCog,
  // Add more icons as needed
} as const;

export type SidebarIconName = keyof typeof sidebarIconMap;
