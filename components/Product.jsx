import Link from 'next/link';
import React from 'react';
import { useFormater } from '../lib/formater';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  const formater = useFormater();

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{formater.formaterCurrency(parseInt(price))}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
