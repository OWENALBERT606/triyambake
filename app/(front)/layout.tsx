
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default async function FrontLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
