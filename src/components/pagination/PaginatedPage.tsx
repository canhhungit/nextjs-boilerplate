/* eslint-disable @typescript-eslint/no-explicit-any */

//https://github1s.com/vercel/examples/blob/main/solutions/pagination-with-ssg/pages/category/index.tsx

import React from 'react';
// import { Text } from '@vercel/examples-ui';
import Pagination from './Pagination';

type PageProps = {
  products: any[];
  currentPage: number;
  totalProducts: number;
  perPage: number;
};

const ProductCard = ({ name, description, price }: any) => (
  <div className="my-10 border-2 border-sky-500 p-3">
    <span>{name}</span>
    <span className="my-3">${price}</span>
    <span className="my-8">{description}</span>
  </div>
);

const PaginationPage = ({
  currentPage,
  totalProducts,
  perPage,
  products,
}: PageProps): JSX.Element => {
  return (
    <div>
      <span>Page {currentPage}</span>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/category/${page}`}
      />
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PaginationPage;
