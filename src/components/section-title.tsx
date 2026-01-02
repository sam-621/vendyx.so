export const SectionTitle = ({ headline, title }: Props) => {
  return (
    <header>
      <span className="text-sm uppercase text-distinct leading-5 tracking-[0.12em]">
        {headline}
      </span>
      <h2 className="font-medium text-3xl sm:text-[40px]">{title}</h2>
    </header>
  );
};

type Props = {
  headline: string;
  title: string;
};
