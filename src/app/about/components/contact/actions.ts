"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
    success?: string;
    error?: string;
} | null;

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'All fields are required' };
    }

    try {
        const { error } = await resend.emails.send({
            from: 'Contact Form <contact@agent247ai.com>',
            to: 'support@agent247ai.com',
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error('Resend error:', error);
            return { error: 'Didn\'t go through. Give it another shot or drop us an email.' };
        }

        return { success: 'You\'re all set. We\'ll be in touch shortly.' };
    } catch (error) {
        console.error('Unexpected error:', error);
        return { error: 'Something went wrong on our end. Please try again or email us directly.' };
    }
}
