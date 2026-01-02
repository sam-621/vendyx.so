import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export const FeatureCard = ({ className, ...props }: Props) => {
  return (
    <article
      className={cn('border min-h-83.5 overflow-hidden rounded-3xl', className)}
      {...props}
    />
  );
};

type Props = ComponentProps<'article'>;
