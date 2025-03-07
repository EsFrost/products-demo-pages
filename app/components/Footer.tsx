import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-8 py-6 border-t dark:border-gray-800 h-[200px]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="my-4 text-justify">
          <h3 className="text-2xl font-bold dark:text-gray-100">Details</h3>
          <p className="mt-4 text-lg dark:text-gray-300">
            A project about product page designs using Next.js for various types
            of eshops.
          </p>
        </div>

        <div className="my-4 text-justify">
          <h3 className="text-2xl font-bold dark:text-gray-100">Contact</h3>
          <p className="mt-4 text-lg dark:text-gray-300">
            Contact me through{" "}
            <a
              href="https://www.linkedin.com/in/sotirios-natsios-a08532121/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="my-4 text-justify">
          <h3 className="text-2xl font-bold dark:text-gray-100">Github</h3>
          <p className="mt-4 text-lg dark:text-gray-300">
            This is my{" "}
            <a
              href="https://github.com/EsFrost"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Github
            </a>{" "}
            page.
          </p>
        </div>
      </div>
      <div className="mt-4 dark:text-gray-400">
        Copyright &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
