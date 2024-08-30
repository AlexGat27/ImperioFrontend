import {CityDto} from "@/api/types.ts";
import {createRequest} from "@/api/request.ts";

export const getCities = createRequest(api => {
    return api.get('/cities').json<CityDto[]>()
})