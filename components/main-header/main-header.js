import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from  '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background"

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
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies community</Link>
                </li>
            </ul>
        </nav>
    </header>
        </> 
    )
}