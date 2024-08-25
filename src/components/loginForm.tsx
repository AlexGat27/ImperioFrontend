import {useContext, useState} from "react";
import {Context} from "../main.tsx";
import {observer} from "mobx-react-lite";
export const LoginForm = () => {
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
    return (

        <div className="flex justify-center items-center h-screen bg-[url('https://images.wallpaperscraft.ru/image/single/zdanie_minimalizm_chb_132403_1920x1080.jpg')] bg-cover">

            <div className="relative w-full max-w-[360px] z-[1]">
                <div className="bg-cut"></div>

                <div className="flex m-[5px 0 0 10px] gap-2 p-[7px] uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" color="#708090"
                         fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-log-in">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                        <polyline points="10 17 15 12 10 7"/>
                        <line x1="15" x2="3" y1="12" y2="12"/>
                    </svg>

                    <h2 className="text-[#747474] text-[16px] tracking-[-1px] leading-5 ">Login</h2>
                </div>

                <div className="p-3 h-[300px] bg-[#fdfdfd] rounded-tr-[6px]">
                    <form id="" method="post" className="flex flex-col gap-6 mt-[30px]">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full mt-[35px]">
                                <label htmlFor="username" className="w-full text-[#032942] font-bold text-[13px] text-left uppercase">Имя пользователя</label>
                                <input
                                    onChange={e => setUserName(e.target.value)}
                                    type="text"
                                    value={userName}
                                    className="textArea"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="password" className="w-full text-[#032942] font-bold text-[13px] text-left uppercase">Пароль</label>
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    value={password}
                                    className="textArea"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="">
                    <button
                        onClick={() => store.login(userName, password)}
                        type="submit"
                        form="login-form"
                        className="w-full h-12 py-0 px-5 font-bold text-[#fff] leading-5 text-center bg-[#708090] border-0 opacity-[1] cursor-pointer  rounded-b-[6px] uppercase ">
                        Начать
                    </button>
                </div>
            </div>
        </div>

    );
};
export default observer(LoginForm);