import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id: number)  => Promise<void>;
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
  return (
    <div>
      <h2>Preço total: R$ {totalPrice}</h2>
      {results.map(product => (
        <ProductItem 
          key={product.id} 
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}