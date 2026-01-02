'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export const joinWaitlist = async (_: unknown, formData: FormData): Promise<Return> => {
  const email = formData.get('email') as string;

  if (!email || !z.email().safeParse(email).success) {
    return { isSuccess: false, error: 'Email should be a valid email' };
  }

  const { error } = await resend.contacts.create({ email });

  if (error) {
    console.error(error);
    return { isSuccess: false, error: 'Failed to join the waitlist' };
  }

  return { isSuccess: true };
};

type Return =
  | {
      isSuccess: false;
      error: string;
    }
  | {
      isSuccess: true;
    };
