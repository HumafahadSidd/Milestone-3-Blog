import React from 'react'

export default function reviewId({
    params,
}:{
    params:{
        ProductId:string;
        reviewId:string;
    };
}) {
  return (
    <div>
      review for{params.reviewId} for product{params.ProductId}
    </div>
  )
}
