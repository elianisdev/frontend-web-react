import React, {FC} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/nav-bar/home";
import {Login} from "./pages/login/login";
import {RouterLayout} from "./pages/common/RouterLayout";

export const AppRouter: FC = () => {
    return (
        //esto lleva el loyauth de home en router layout irian los componentes que lleven el menu ypor fuera como el login que no muestra el navbar
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/home" element={<Home/>}/>
        </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
    }
;