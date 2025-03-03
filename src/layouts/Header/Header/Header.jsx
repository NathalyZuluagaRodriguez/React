import React from "react"
import './Header.css'
import { NavBar } from "../../NavBar/NavBar"
import { ItemNavBar } from "../../../components/ItemNavBar/ItemNavBar"

export const Header = () =>{
    return (
        <>
            <header className="App-header" >
              
                <NavBar>
                    <ul>
                        <ItemNavBar contents='Inicio'/>
                        <ItemNavBar contents='Clase 1'/>
                        <ItemNavBar contents='clase 2'/>

                    </ul>
                </NavBar>
            </header>
            
        </>
    )
}