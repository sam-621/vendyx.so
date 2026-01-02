import { Logo } from './logo';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="font-normal text-lg">Lune</span>
      </div>
      <nav className="flex items-center gap-6">
        <a
          href="https://github.com/lunejs/lune/tree/main/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
        <a href="https://github.com/lunejs/lune" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <Button size={'sm'} className="rounded-full">
          Get started
        </Button>
      </nav>
    </header>
  );
};
