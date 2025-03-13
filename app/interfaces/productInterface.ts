export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  images: ImageType[];
  specifications: {
    material: string;
    color: string;
    size: string;
    weight: number;
    height: number;
    brand: string;
  };
  sku: string;
  shortDescription: string;
  reviewed: string;
  reviews: Reviews;
}

export interface ImageType {
  id: number;
  url: string;
  alt: string;
  title: string;
}

export interface Reviews {
  rating: number;
  totalReviews: number;
  customerReviews: CustomerReview[];
}

export interface CustomerReview {
  name: string;
  email: string;
  rating: number;
  review: string;
}

export interface ProductList {
  products: Product[];
}
