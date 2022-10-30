import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../nvabar';
import './index.css'

export default function Home() {
  return (
    <section className='layout'>

        <NavBar />        
        <Outlet />

    </section>
    )
}
