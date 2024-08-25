import api from "../http"
import {AxiosResponse} from 'axios'
import {IUser} from "../models/IUser.ts";

export default class AuthService{
    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return api.get<IUser[]>('/users')
    }
}