import { WorkflowIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Badge } from '../ui/badge';

export const OptionPreview = ({ title, values }: Props) => {
  return (
    <div className="hover:bg-muted/50 w-full flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between relative">
        <p className="text-left text-sm font-medium font-platform">{title}</p>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="p-1 bg-distinct/20 rounded-sm absolute right-0">
              <WorkflowIcon className="text-distinct" size={14} />
            </div>
          </TooltipTrigger>
          <TooltipContent className="font-platform">
            Connected to{' '}
            <span className="font-semibold hover:underline cursor-default">{title}</span>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {values.map(v => (
          <Badge key={v.label} variant="secondary" className="items-center">
            {v.color && <div className="h-3 w-3 rounded" style={{ background: v.color }} />}
            {v.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

type Props = {
  title: string;
  values: { label: string; color?: string }[];
};
