import React from "react";
import Image from "next/image";
import data from "../demo_data/header.json";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex px-8 justify-between h-20 items-center">
      <div className="hidden md:block md:w-1/3">
        <Image
          src="/"
          alt="Site logo"
          sizes="100vw"
          height={0}
          width={0}
          priority={true}
        />
      </div>

      <nav className="w-full md:w-2/3">
        <ul className="flex gap-x-8 text-2xl">
          {data.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 transition-all duration-300 relative"
            >
              <Link href={item.url || "/"}>{item.title}</Link>
              {item.products && (
                <ul className="absolute w-32">
                  {item.products.map((product, index) => (
                    <li key={index} className="text-lg">
                      <Link href={product.url}>{product.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
