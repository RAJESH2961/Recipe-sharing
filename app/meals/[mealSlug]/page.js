import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

// custon metadata for the meals page
export async function generateMetadata({params}) {
  const meal = getMeal(params.mealSlug);
  return {
    title: meal.title,
    description : meal.summary,
  };
} 

// every component in the page.js gets an props passed by nextjs 

export default function MealDetail({params}) {
  const meal = getMeal(params.mealSlug);

  if(!meal) {
    notFound();// it calls closest not-found page if not it shows defaualt page
  }


  // adding line breaks for instructions
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill/>
      </div>
      <div className={classes.headerText}>
        <h2>{meal.title}</h2>
        <p className={classes.creator}> by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html: meal.instructions,
      }}></p>
    </main>
    </>
  );
}
