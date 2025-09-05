import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";
import { baseOptions, linkItems } from "@/lib/layout.shared";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          text: "Docs",
          url: "/docs",
        },
        ...linkItems,
      ]}
    >
      {children}
    </HomeLayout>
  );
}
