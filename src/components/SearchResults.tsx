import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
  onAddToWishlist: (id: number)  => Promise<void>;
}

export function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])

  return (
    <div>
      <h2>Preço total: R$ {totalPrice}</h2>

      {/* Exemplo de igualdade referencial */}
      {/* <Component totalPrice={totalPrice} /> */}

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