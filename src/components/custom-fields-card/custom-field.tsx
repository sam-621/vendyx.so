import {
  AlignLeftIcon,
  BoxIcon,
  CalendarIcon,
  CircleIcon,
  DollarSignIcon,
  FolderIcon,
  HashIcon,
  ImageIcon,
  LinkIcon,
  ListIcon,
  PackageIcon,
  PaletteIcon,
  PercentIcon,
  ToggleLeftIcon,
  TypeIcon
} from 'lucide-react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/select';

export const CustomField = ({ inputDefault, typeDefault }: Props) => {
  return (
    <div className="flex items-center p-4 gap-4">
      <Input className="font-platform" defaultValue={inputDefault} />
      <Select defaultValue="single">
        <SelectTrigger className="min-w-44 font-platform">
          <SelectValue placeholder="Select a value" />
        </SelectTrigger>
        <SelectContent className="font-platform">
          <SelectItem value="single">
            <CircleIcon size={16} /> One value
          </SelectItem>
          <SelectItem value="list">
            <ListIcon size={16} /> List of values
          </SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue={typeDefault}>
        <SelectTrigger className="min-w-44 font-platform">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent className="font-platform">
          <SelectGroup>
            <SelectLabel>Text</SelectLabel>
            <SelectItem value="single_line_text">
              <TypeIcon size={16} /> Single line text
            </SelectItem>
            <SelectItem value="multi_line_text">
              <AlignLeftIcon size={16} /> Multi line text
            </SelectItem>
            <SelectItem value="url">
              <LinkIcon size={16} /> URL
            </SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Number</SelectLabel>
            <SelectItem value="integer">
              <HashIcon size={16} /> Integer
            </SelectItem>
            <SelectItem value="decimal">
              <PercentIcon size={16} /> Decimal
            </SelectItem>
            <SelectItem value="money">
              <DollarSignIcon size={16} /> Money
            </SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Media</SelectLabel>
            <SelectItem value="image">
              <ImageIcon size={16} /> Image
            </SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Reference</SelectLabel>
            <SelectItem value="product_reference">
              <PackageIcon size={16} /> Product
            </SelectItem>
            <SelectItem value="collection_reference">
              <FolderIcon size={16} /> Collection
            </SelectItem>
            <SelectItem value="custom_object_reference">
              <BoxIcon size={16} /> Custom object
            </SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Other</SelectLabel>
            <SelectItem value="boolean">
              <ToggleLeftIcon size={16} /> Boolean
            </SelectItem>
            <SelectItem value="date">
              <CalendarIcon size={16} /> Date
            </SelectItem>
            <SelectItem value="color">
              <PaletteIcon size={16} /> Color
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

type Props = {
  inputDefault?: string;
  typeDefault?: string;
};
