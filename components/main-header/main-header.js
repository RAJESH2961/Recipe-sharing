import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from  '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background"
import NavLink from "./nav-link";
// import { usePathname } from "next/navigation";

export default function MainHeader() {
    return(
    <>
    <MainHeaderBackground/>
<header className={classes.header}>
        <Link href="/" className={classes.logo}>
        {/* <img src={logoImg.src} alt="A plate with food on it" /> */}
        <Image src={logoImg} alt="A plate with food on it" priority />
        Next Level Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    {/* // THe below code only runs on client not this page */}
                    <NavLink href="/meals">Browse Meals </NavLink>
                </li>
                <li>
                    <NavLink href="/community">Foodie community </NavLink>
                </li>
            </ul>
        </nav>
    </header>
        </> 
    )
}