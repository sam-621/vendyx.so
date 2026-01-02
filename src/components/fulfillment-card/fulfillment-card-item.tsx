import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { ButtonGroup } from '../ui/button-group';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { Button } from '../ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

export const FulfillmentCardItem = ({ baseQuantity, selected, setSelected }: Props) => {
  const [quantity, setQuantity] = useState(baseQuantity);

  const isSelected = useMemo(
    () => selected.some(s => s === baseQuantity),
    [selected, baseQuantity]
  );

  return (
    <label
      className={cn(
        'flex items-center justify-between py-4 px-4 hover:bg-muted/50 transition-colors',
        isSelected && 'bg-muted/50'
      )}
    >
      <div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={isSelected}
            onCheckedChange={value => {
              if (value) setSelected(prev => [...prev, baseQuantity]);
              else setSelected(prev => prev.filter(s => s !== baseQuantity));
            }}
          />
          <img className="size-12 object-cover rounded-md" src="/black-cup.webp" />

          <div className="flex flex-col gap-2">
            <small className="font-platform font-medium text-sm leading-none">Cap</small>
            <small className="font-platform font-medium text-sm leading-none text-muted-foreground">
              Black / U
            </small>
          </div>
        </div>
      </div>
      <div>
        {isSelected ? (
          <ButtonGroup
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <InputGroup className="w-17! h-8">
              <InputGroupInput
                className=""
                maxLength={2}
                value={quantity}
                onChange={e => {
                  if (e.target.value === '') setQuantity(0);

                  const value = parseInt(e.target.value, 10);

                  if (!isNaN(value) && value >= 1 && value <= 99) {
                    if (value > baseQuantity) return;
                    setQuantity(value);
                  }
                }}
              />
              <InputGroupAddon align={'inline-end'}>of {baseQuantity}</InputGroupAddon>
            </InputGroup>
            <Button
              variant="outline"
              size="icon"
              type="button"
              aria-label="Decrement"
              className="size-8"
              disabled={quantity === 1}
              onClick={() => {
                setQuantity(prev => prev - 1);
              }}
            >
              <MinusIcon />
            </Button>
            <Button
              variant="outline"
              type="button"
              aria-label="Increment"
              className="size-8 rounded-md"
              disabled={quantity >= baseQuantity}
              onClick={() => {
                setQuantity(prev => prev + 1);
              }}
            >
              <PlusIcon />
            </Button>
          </ButtonGroup>
        ) : (
          <>
            x
            <Badge className="ml-2" variant={'secondary'}>
              {baseQuantity}
            </Badge>
          </>
        )}
      </div>
    </label>
  );
};

type Props = {
  baseQuantity: number;
  selected: number[];
  setSelected: Dispatch<SetStateAction<number[]>>;
};
