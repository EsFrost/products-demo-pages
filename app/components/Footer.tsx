import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="my-4 text-justify">
          <h3 className="text-2xl font-bold">Details</h3>
          <p className="mt-4 text-lg">
            A project about product page designs using Next.js for various types
            of eshops.
          </p>
        </div>

        <div className="my-4 text-justify">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-4 text-lg">
            Contact me through{" "}
            <a
              href="https://www.linkedin.com/in/sotirios-natsios-a08532121/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-blue-600 transition-all duration-300"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="my-4 text-justify">
          <h3 className="text-2xl font-bold">Github</h3>
          <p className="mt-4 text-lg">
            This is my{" "}
            <a
              href="https://github.com/EsFrost"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-blue-600 transition-all duration-300"
            >
              Github
            </a>{" "}
            page.
          </p>
        </div>
      </div>
      <div className="mt-4">Copyright &copy; {new Date().getFullYear()}</div>
    </footer>
  );
};
