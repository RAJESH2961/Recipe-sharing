import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
  // we are getting meals directly from the backend 
  const meals = await getMeals();

  return (<MealsGrid meals={meals} />);

}

export default function MealsPage() { // we can convert an Componetn into async in NEXTJ.s but we cant do in react

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          Choose your favourite receipe ans cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite receipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
        <Meals />
        </Suspense>
        {/* Suspense tells Next.js:
        “Render and send everything that’s ready. While waiting for Meals to load, show the fallback (Fetching meals...). When Meals is ready, insert it.” */}
      </main>
    </>
  );
}
