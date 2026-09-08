import type { NavLink } from "@/types/wiki";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Project", href: "/project" },
  {
    label: "Engineering",
    href: "/engineering",
    children: [
      { label: "RNAt Model", href: "/engineering/rnat-model" },
      { label: "Kinetic Model", href: "/engineering/kinetic-model" },
      { label: "ML1", href: "/engineering/ml-1" },
      { label: "ML2", href: "/engineering/ml-2" },
      { label: "Financial Model", href: "/engineering/financial-model" },
    ],
  },
  { label: "Documentation", href: "/documentation" },
  { label: "Community", href: "/community" },
  {
    label: "Entrepreneurship",
    href: "/entrepreneurship",
    children: [{ label: "In Depth", href: "/entrepreneurship/details" }],
  },
];
