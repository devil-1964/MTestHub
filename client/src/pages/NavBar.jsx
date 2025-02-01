import React from "react";

function NavBar({ socials }) {
  return (
    <nav className="border-b border-neutral-700 max-sm:flex-col flex items-center justify-center bg-neutral-800/70 backdrop-blur-sm fixed w-full top-0 z-10">
      <div className="container flex justify-center mx-auto max-sm:py-2 px-4 py-6 max-w-3xl">
        <h1 className="text-2xl font-light text-neutral-200 hover:text-neutral-100 transition-colors">
          Devansh
        </h1>
      </div>
      <div className="container flex justify-center max-sm:py-2 mx-auto px-4 py-6 gap-3">
        {socials?.map((social, index) => (
          <a
            key={index}
            href={social.links}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-neutral-200 hover:text-neutral-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-neutral-400 after:transition-all hover:after:w-full"
          >
            {social.social_name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;