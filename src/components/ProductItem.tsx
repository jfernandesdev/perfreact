import { memo, useState } from 'react';
import { AddProductToWishlist } from './AddProducToWishlist';

interface ProductItemProps{
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishlist: (id: number) => Promise<void>;
}

export function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps ) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

     {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
     )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})