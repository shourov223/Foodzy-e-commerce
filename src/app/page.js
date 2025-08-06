import Banner from "@/components/Home/Banner";
import Deals from "@/components/Home/Deals";
import Navbar from "@/components/Home/Navbar";
import OurShop from "@/components/Home/ourShop";
import Popular_product from "@/components/Home/Popular_product";
import Suggested_product from "@/components/Home/Suggested_product";
import TopSellings from "@/components/Home/TopSellings";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Suggested_product />
      <Popular_product />
      <Deals />
      <TopSellings />
      <OurShop />
    </>
  );
}
