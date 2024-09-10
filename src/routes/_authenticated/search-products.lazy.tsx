import { createLazyFileRoute } from '@tanstack/react-router'
import ProductsSearchPage from "@/pages/search-products/page.tsx";

export const Route = createLazyFileRoute('/_authenticated/search-products')({
  component: ProductsSearchPage
})