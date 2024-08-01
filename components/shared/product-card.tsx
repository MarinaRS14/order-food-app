import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Plus, RussianRuble } from 'lucide-react';
import { Button } from '../ui';

interface Props {
  className?: string;
  imageUrl: string;
  id: number;
  name: string;
  price: number;
}

export const ProductCard: React.FC<Props> = ({ className, imageUrl, id, name, price }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex flex-col justify-center p-6 bg-secondary rounded-lg w-[260px]">
          <Image
            className="w-[215px] h-[215px]"
            width={215}
            height={215}
            src={imageUrl}
            alt={name}
          />

          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
          <p className="text-sm text-gray-400">
            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
              от <b>{price} P</b>
            </span>

            <Button variant={'secondary'} className="text-base font-bold">
              <Plus size={20} className="mr-1" />
              Добавить
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
