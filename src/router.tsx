import React, {FC} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/nav-bar/home";
import {Login} from "./pages/login/login";
import {RouterLayout} from "./pages/common/RouterLayout";
import {PruebaPage} from "./pages/prueba/prueba-page";
import {CalendarPage} from "./pages/calendar/pageCalendar";
import {StorePage} from "./pages/store/store";




export const AppRouter: FC = () => {
    return (
        //esto lleva el layout de home en router layout irian los componentes que lleven el menu y por fuera como el login que no muestra el navbar
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/prueba" element={<PruebaPage/>}/>
                <Route path="/calendar" element={<CalendarPage/>}/>
                <Route path="/store" element={<StorePage/>}/>
        </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
    }
;