"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.service";
import DeleteModal from "../../components/ui/delete-modal";
import { toast } from "react-toastify";

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDeleteId, setProductToDeleteId] = useState("");

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const handleEdit = (product: Product) => {
    // TODO: implement edit
  };

  const handleDelete = (id: string) => {
     setProductToDeleteId(id);
     setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

   const handleDeleteConfirm = async () => {
     if (!productToDeleteId) return;
     try {
       await deleteProduct(productToDeleteId);
       fetchProducts();
       toast.success("Product deleted successfully");
       setIsDeleteModalOpen(false);
       setProductToDeleteId("");
     } catch (error) {
       console.error("Failed to delete product", error);
       toast.error("Failed to delete product");
     }
   };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Product Management</h1>
          <p className="opacity-50">Manage your inventory, prices and stock.</p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ProductManagement;
