import {SearchProductsParams} from "@/api/endpoints/products/search/search.ts";
import {queryOptions} from "@tanstack/react-query";
import { api } from "@/api"

export const searchProductsOptions = (searchParams: SearchProductsParams) =>
    queryOptions({
        queryKey: ['products', searchParams as string],
        queryFn: () => api.searchProducts(searchParams),
        enabled: !!searchParams.search_query,
    })