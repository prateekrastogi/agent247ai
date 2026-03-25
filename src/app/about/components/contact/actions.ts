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
    const recaptchaToken = formData.get('g-recaptcha-response') as string;

    if (!name || !email || !message) {
        return { error: 'All fields are required' };
    }

    if (!recaptchaToken) {
        return { error: 'Please complete the reCAPTCHA' };
    }

    // Verify reCAPTCHA
    try {
        const verifyResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
            method: 'POST',
        });
        const verifyData = await verifyResponse.json();
        
        // Debug logging for production (check your server logs)
        console.log('reCAPTCHA verification result:', verifyData);

        if (!verifyData.success || verifyData.score < 0.5) {
            console.error('reCAPTCHA failed. Success:', verifyData.success, 'Score:', verifyData.score, 'Errors:', verifyData['error-codes']);
            return { error: 'reCAPTCHA verification failed. Retry or contact support.' };
        }
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return { error: 'Failed to verify reCAPTCHA. Please try again later.' };
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
