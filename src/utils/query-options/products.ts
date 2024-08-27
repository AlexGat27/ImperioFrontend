import {SearchProductsParams} from "@/api/endpoints/products/search/search.ts";
import {queryOptions} from "@tanstack/react-query";
import { api } from "@/api"

export const searchProductsOptions = (searchParams: SearchProductsParams) =>
    queryOptions({
        queryKey: ['products'],
        queryFn: () => api.searchProducts(searchParams),
        enabled: !!searchParams,
    })