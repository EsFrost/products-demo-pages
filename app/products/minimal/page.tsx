"use client";

import React, { useState } from "react";
import Image from "next/image";
import data from "../../demo_data/products.json";
import { ImageModal } from "../../components/general_components/ImageModal";
import { Product } from "../../interfaces/productInterface";

export default function MinimalPage() {
  const product = data[0] as unknown as Product;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Check if we have images before trying to display them
  const hasImages = product?.images && product.images.length > 0;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex flex-col md:flex-row p-8 max-w-7xl mx-auto">
      {/* Product Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div
          className="w-[500px] h-[500px] relative cursor-pointer overflow-hidden"
          onClick={openModal}
        >
          {hasImages ? (
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt || product.name}
              fill
              sizes="100vw"
              priority={true}
              className="w-full h-full object-none object-[50%_40%]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400">
              No image available
            </div>
          )}
        </div>

        {/* Thumbnail Preview (Optional) */}
        {hasImages && product.images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={image.id}
                className="w-[500px] h-[500px] cursor-pointer overflow-hidden transition-colors"
                style={{
                  borderColor:
                    selectedImageIndex === index
                      ? "var(--foreground)"
                      : "transparent",
                }}
                onClick={() => {
                  setSelectedImageIndex(index);
                  openModal();
                }}
              >
                <Image
                  src={image.url}
                  alt={image.alt || `${product.name} thumbnail ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="object-none"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="text-2xl mb-4">{product.price.toFixed(2)}€</div>

        {product.shortDescription && (
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {product.shortDescription}
          </p>
        )}

        {/* Add to Cart Button */}
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
          Add to Cart
        </button>

        {/* Product Description */}
        {product.description && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
          </div>
        )}

        {/* Product Specifications */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Specifications</h2>
          <div className="grid grid-cols-2 gap-y-2">
            {product.specifications.brand && (
              <>
                <p className="text-gray-500 dark:text-gray-400">Brand</p>
                <div>{product.specifications.brand}</div>
              </>
            )}
            {product.specifications.material && (
              <>
                <div className="text-gray-500 dark:text-gray-400">Material</div>
                <div>{product.specifications.material}</div>
              </>
            )}
            {product.specifications.color && (
              <>
                <div className="text-gray-500 dark:text-gray-400">Color</div>
                <div>{product.specifications.color}</div>
              </>
            )}
            {product.specifications.size && (
              <>
                <div className="text-gray-500 dark:text-gray-400">Size</div>
                <div>{product.specifications.size}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {hasImages && (
        <ImageModal
          images={product.images}
          initialIndex={selectedImageIndex}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
