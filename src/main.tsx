
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import Store from "./store/store.ts";
import {createContext} from "react";

interface State{
    store: Store,
}
const rootElement = document.getElementById('root');
const store = new Store();
export const Context = createContext<State>({
    store
})

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <Context.Provider value={{
            store
        }}>
            <App />
        </Context.Provider>
    );
} else {
    console.error('Root element not found');
}
