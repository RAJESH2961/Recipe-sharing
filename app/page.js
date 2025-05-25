import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Go to Meals page</Link></p>
      <p><Link href="/meals/share">GShareMeals page</Link></p>
      <p><Link href="/community">Community ShareMeal Page</Link></p>
    </main>
  );
}
