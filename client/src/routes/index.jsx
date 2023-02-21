import React from "react";
import { Routes, Route, Navigate,  } from "react-router-dom";
import {Form} from '../shared/components/index';
import {DataTable} from '../shared/components/list/List'
import { Home } from "../shared/components/index";

export const AppRoutes = () =>{
    return(
        <Routes >
            <Route path="/home" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
            <Route path="/add_user" element={<Form/>}/>
            <Route path="/view_users" element={<DataTable/>}/>
        </Routes>
        
    );
}