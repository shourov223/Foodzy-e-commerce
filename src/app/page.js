import Banner from "@/components/Home/Banner";
import Navbar from "@/components/Home/Navbar";
import Popular_product from "@/components/Home/Popular_product";
import Suggested_product from "@/components/Home/Suggested_product";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Suggested_product />
      <Popular_product />
    </>
  );
}
