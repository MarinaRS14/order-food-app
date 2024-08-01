import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, RussianRuble, ShoppingCart, User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b px-10', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left side */}
        <div className="flex items-center gap-4">
          <Image src={'/logo.png'} alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <Button variant={'outline'} className="flex items-center gap-2">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button variant={'default'} className="group relative">
              <b className="mr-2">0</b>
              <RussianRuble size={16} />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <span className="h-full w-[1px] bg-white/50 mx-3"></span>
                <ShoppingCart size={16} className="relative" />
                <b className="ml-2">0</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
