import { fetchAPI, getAuthHeaders } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>("/categories");
};

export const deleteCategory = async (id: string): Promise<void> => {
  return await fetchAPI<void>(`/categories/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });
};
