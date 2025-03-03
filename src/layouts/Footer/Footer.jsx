import { NavBar } from "../NavBar/NavBar"
import { ItemNavBar } from "../../components/ItemNavBar/ItemNavBar"
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";


export const Footer= () =>{
    return(
        <>
        <footer className="">
           <NavBar>
                <ul>
                    <ItemNavBar contents={<FaFacebook />}/>
                    <ItemNavBar contents={<FaTwitter/>}/>
                    <ItemNavBar contents={<FaInstagramSquare />}/>
                </ul>
           </NavBar>
        </footer>
        </>
    )
}