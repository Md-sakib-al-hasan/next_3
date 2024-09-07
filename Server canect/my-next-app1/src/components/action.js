'use server'
import { z } from 'zod'

const schema = z.object({
    email: z.string({
        invalid_type_error: 'Invalid Email'
    })
})

export async function updateUser(prevState, formData) {
    console.log(parseInt(formData.get('email'), 10))
    console.log(typeof (parseInt(formData.get('email'), 10)))
    const validatedFields = schema.safeParse({
        email: formData.get('email'),

    })

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }
    const email = validatedFields.data.email;
    console.log(`Creating user with email: ${email}`);

    // Example: Insert user data into a database
    // await db.user.create({ data: { email } });

    return { success: true, message: 'User created successfully' };
}