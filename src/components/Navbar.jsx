import { Link } from "react-router-dom"

export const Navbar = () => {
    
    return(
        <div className="Navbar">
            <Link to={"/"}>Home</Link>
            <Link to={"login"}>Login</Link>
        </div>
    )
}