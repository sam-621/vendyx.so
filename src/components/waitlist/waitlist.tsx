'use client';

import { useActionState } from 'react';
import { Button } from '../ui/button';
import { joinWaitlist } from '@/app/actions';
import { CheckCircleIcon, CircleNotchIcon } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

export const Waitlist = () => {
  const [result, action, isPending] = useActionState(joinWaitlist, null);

  return (
    <form action={action} className="flex flex-col items-start gap-2 w-full xs:flex-row">
      <div className="relative w-full xs:max-w-64">
        <Input disabled={isPending} placeholder="m@example.com" className="w-full" name="email" />
        {!isPending && !result?.isSuccess && (
          <span className="-bottom-6 left-0 absolute text-sm text-destructive">
            {result?.error}
          </span>
        )}
      </div>
      <Button disabled={isPending} className="w-full xs:w-33">
        {isPending ? (
          <CircleNotchIcon weight="duotone" className={cn('animate-spin')} />
        ) : result?.isSuccess ? (
          <CheckCircleIcon weight="duotone" />
        ) : (
          'Join the Waitlist'
        )}
      </Button>
    </form>
  );
};
