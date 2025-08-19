import Banner from "@/components/Home/Banner";
import Deals from "@/components/Home/Deals";
import Facilities from "@/components/Home/Facilities";
import OurShop from "@/components/Home/ourShop";
import Popular_product from "@/components/Home/Popular_product";
import Suggested_product from "@/components/Home/Suggested_product";
import TopSellings from "@/components/Home/TopSellings";

export default function Home() {
  return (
    <>
      <Banner />
      <Suggested_product />
      <Popular_product />
      <Deals />
      <TopSellings />
      <OurShop />
      <Facilities />
    </>
  );
}
