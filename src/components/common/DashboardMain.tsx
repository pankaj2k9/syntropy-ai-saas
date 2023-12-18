"use client"
import React from 'react'
import { useContext } from 'react'
import { Context } from "@/provider/ContextProvider";
import SKULists from './SKULists';
import Skus from '../skus';
function DashboardMain() {
    const { info } = useContext(Context);
    return (
        <> {(!info.isFirst || info.searchText) ? <Skus /> : <SKULists />}</>
    )
}

export default DashboardMain