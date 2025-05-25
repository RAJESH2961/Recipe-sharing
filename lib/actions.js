'use server';

  // it ensures only executes on a server 
  export async function shareMeal(formData) { // form data is automatically passed when action is called
    // 'use server'; // it creates a server actions
    // extracting details
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }
    console.log(meal);
    
  }