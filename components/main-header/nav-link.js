import Link from "next/link";
export default function NavLink() {
    return (
        <Link>
        <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link>
        </Link>
    );
}