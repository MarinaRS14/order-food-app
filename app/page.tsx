import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import React from 'react';

export default function Page() {
  return (
    <>
      <Container className="mt-8 px-10 pt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className=" mt-8 pb-14 px-10 pt-10">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16 ml-3">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Zavtrak"
                items={[
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF1EB095B2BBDE8E1230BD91995D9D.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
