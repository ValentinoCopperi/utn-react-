import React, { useContext } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link, NavLink } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { ProductsContext } from "../context/ProductsContext";
export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { user, handleSignOut } = useContext(UserContext)
    const {cart} = useContext(ProductsContext)
   
    const menuItems = [
        "Home",
        "Products",
        "Contact",
        "Login",
        "Register",

    ];
    

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#e5e5e5]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>

                    <p className="font-bold text-inherit">Sky-Level</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-12" justify="center">
                <NavbarItem>
                    <NavLink to='/home' className={({ isActive }) => isActive ? "underline" : ""}>
                        HOME
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to='/products' className={({ isActive }) => isActive ? "underline" : ""}>
                        PRODUCTS
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "underline" : ""}>
                        CONTACT
                    </NavLink>
                </NavbarItem>
                {
                    user ?
                        <NavbarItem>
                            <NavLink onClick={handleSignOut} >
                                LOGOUT
                            </NavLink>
                        </NavbarItem>
                        :

                        <>
                            <NavbarItem>
                                <NavLink to='/register' className={({ isActive }) => isActive ? "underline" : ""}>
                                    REGISTER
                                </NavLink>
                            </NavbarItem>
                            <NavbarItem>
                                <NavLink to='/login' className={({ isActive }) => isActive ? "underline" : ""}>
                                    LOGIN
                                </NavLink>
                            </NavbarItem>
                        </>
                }
            </NavbarContent>
            <NavbarContent justify="end">

                <NavbarItem>
                    <Link to='/cart'>
                        <button as={Link} color="primary" href="#" variant="flat">
                            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                            <span>{cart.length}</span>
                        </button>
                    </Link>
                </NavbarItem>
                {
                    user && <NavbarItem className="block md:hidden">
                        <button onClick={handleSignOut}>
                            Logout
                        </button>
                    </NavbarItem>
                }
            </NavbarContent>
            <NavbarMenu className="bg-[#000000af]">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <NavLink
                            style={{color:'white'}}
                            className={({ isActive }) => isActive ? "underline w-full" : "w-full"}
                            to={`/${item.toLowerCase()}`}
                            size="lg"

                        >
                            {item}
                        </NavLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
