import { Logo } from './logo';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className="absolute w-[calc(100%-48px)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-normal text-lg">Lune</span>
        </div>
        <nav className="flex items-center gap-6">
          <Button variant={'link'} className="p-0 h-fit rounded-xs" asChild>
            <a
              href="https://github.com/lunejs/lune/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </Button>
          <Button variant={'link'} className="p-0 h-fit rounded-xs" asChild>
            <a href="https://github.com/lunejs/lune" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Button>
          <Button size={'sm'} asChild>
            <a
              href="https://github.com/lunejs/lune/blob/main/docs/getting-started.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
