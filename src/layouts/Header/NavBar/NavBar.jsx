import React from "react"
import './NavBar.css'
import { ItemNavbar } from "../../../components/ItemNavbar/ItemNavbar"

export const Navbar = () =>{
    return (

          <nav>
            <ul>
              <ItemNavbar 
              contents='Inicio'/>
               <ItemNavbar 
              contents='Contenido'/>
               <ItemNavbar 
              contents='Ayuda'/>
            </ul>
          </nav>
       
            
    )
}