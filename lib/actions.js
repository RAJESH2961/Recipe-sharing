'use server';

import { redirect } from 'next/navigation'; // ✅ CORRECT
import { saveMeal } from "./meals";
import { revalidatePath } from 'next/cache';

  function isInvalidText(text) {
    return !text || text.trim() === ''
  }

  // it ensures only executes on a server 
  export async function shareMeal(shareMeal ,formData) { // form data is automatically passed when action is called
    // 'use server'; // it creates a server actions
    // extracting details
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    };

    // validating server side validation
    if(isInvalidText((meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) ){
    return {
      message: 'Invalid input..'
    }
  }
    // console.log(meal);
    await saveMeal(meal);

    // throwing cache away in production if we added new meal
    revalidatePath('/meals', 'layout');// this function tells to mextjs that revalidate the cache certain this path when added nre data
    // after submitting
    redirect('/meals');
    
  }