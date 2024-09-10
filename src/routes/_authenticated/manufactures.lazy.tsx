import {createLazyFileRoute} from "@tanstack/react-router";
import {ManufacturesPage} from "@/pages/manufactures/all-manufactures/page.tsx";

export const Route = createLazyFileRoute('/_authenticated/manufactures')({
    component: ManufacturesPage
})