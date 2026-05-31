import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisitBeacon from "@/components/VisitBeacon";

/**
 * Layout for the public-facing site: navbar, footer, and the visit beacon.
 * Routes outside this group (e.g. /stats) render chrome-free.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <VisitBeacon />
    </>
  );
}
