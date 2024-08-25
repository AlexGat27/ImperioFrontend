
import {LoginForm} from "./components/loginForm";
import './index.css'
import {useContext, useEffect, useState} from "react";
import {Context} from "./main.tsx";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser.ts";
import UserService from "./services/UserService.ts";


export const App = () => {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect( () => {
        if (localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])

    async function getUsers(){
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data)

        } catch (e){
            console.log(e)
        }
    }

    if (store.isLoading) {
        return <div>Загрузка</div>
    }

    if (!store.isAuth){
        return <LoginForm/>
    }

    return (

        <div>
            <LoginForm/>
            <button onClick={ () => store.logout()}>Выйти</button>
            <div>
                <button onClick={getUsers}>
                    Получить пользователей
                </button>
            </div>

        </div>
    )

}
export default observer(App)

