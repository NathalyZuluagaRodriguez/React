import { NavLink } from "react-router-dom"

export const ItemNavBar= ({styles, contents, route})=>{
    return (
         <li>
            <NavLink className={styles} to= {route}>{contents}</NavLink>
         </li>
            
    )
}