import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageWrapper } from "../page-wrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <div>
          <Header active_page="about" />
          <div className="bg-app-purple py-8 flex justify-center">
            <p className="w-18 p-1 border-t border-b border-yellow-600 text-3xl text-white app-header font-bold">
              Blog
            </p>
          </div>
          <div className="bg-white">
            Section1
          </div>
          <Footer />
        </div>
      </PageWrapper>
    </>
  );
}
