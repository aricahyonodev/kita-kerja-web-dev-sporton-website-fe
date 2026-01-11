import CategoriesSection from "./home/categories";
import HeroSection from "./home/hero";
import ProductsSection from "./home/products";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CategoriesSection/>
      <ProductsSection/>
    </main>
  );
}
