import type { Metadata } from "next";
import { DashboardPage } from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Halaman administrasi konten KanjiMocha.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <DashboardPage />;
}
