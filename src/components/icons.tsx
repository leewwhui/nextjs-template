import {
  LucideProps,
  ShoppingCart,
  Search,
  MenuIcon,
  GhostIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

export const Icons = {
  Logo: (props: LucideProps) => <GhostIcon {...props} />,
  Cart: (props: LucideProps) => <ShoppingCart {...props} />,
  Search: (props: LucideProps) => <Search {...props} />,
  Menu: (props: LucideProps) => <MenuIcon {...props} />,
  Moon: (props: LucideProps) => <MoonIcon {...props} />,
  Sun: (props: LucideProps) => <SunIcon {...props} />,
};
