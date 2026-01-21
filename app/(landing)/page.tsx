import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";
import CategoriesSection from "./home/categories";
import HeroSection from "./home/hero";
import ProductsSection from "./home/products";

export default async function Home() {

  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ])

  return (
    <main className="pb-52">
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}
