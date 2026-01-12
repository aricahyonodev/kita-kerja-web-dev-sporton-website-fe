import CategoriesSection from "./home/categories";
import HeroSection from "./home/hero";
import ProductsSection from "./home/products";

export default function Home() {
  return (
    <main className="pb-52">
      <HeroSection/>
      <CategoriesSection/>
      <ProductsSection/>
    </main>
  );
}
