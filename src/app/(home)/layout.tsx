import { Navigation } from "@/components/layout/navigation/navigation";
import { FC } from "react";

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
