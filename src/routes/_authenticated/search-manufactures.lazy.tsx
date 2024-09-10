import {createLazyFileRoute} from '@tanstack/react-router'
import ManufacturerSearchPage from "@/pages/search-manufactures/page.tsx";

export const Route = createLazyFileRoute('/_authenticated/search-manufactures')({
    component: ManufacturerSearchPage
})