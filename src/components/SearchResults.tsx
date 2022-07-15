import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
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
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}