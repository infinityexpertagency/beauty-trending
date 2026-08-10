import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import TrendingProducts from "@/components/home/TrendingProducts";
import BrandStory from "@/components/home/BrandStory";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Categories />
      <TrendingProducts />
      <BrandStory />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </>
  );
}