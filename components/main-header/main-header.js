'use client';
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from  '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background"
import { usePathname } from "next/navigation";

export default function MainHeader() {
    // Getting curretn active path
    const path = usePathname();
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
                    
                </li>
                <li>
                    <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Foodies community</Link>
                </li>
            </ul>
        </nav>
    </header>
        </> 
    )
}