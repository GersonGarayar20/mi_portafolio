import React from "react";

export default function CardProject({
  title,
  description,
  imagen,
  github,
  url,
  tags,
}) {
  return (
    <li>
      <div className="overflow-hidden rounded">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            className="object-cover w-full h-full hover:scale-105 transition-all duration-200 ease-out"
            src={imagen}
            alt={title}
          />
        </a>
      </div>
      <div className="py-4">
        <ul className="flex gap-2 mb-2">
          {tags.map((tag, i) => (
            <li key={i} className="text-secondary text-sm">
              #{tag}
            </li>
          ))}
        </ul>
        <h3 className="text-base-content text-xl font-bold ">
          {title}
        </h3>
        <p className="text-neutral-content">{description}</p>
        <div className="flex gap-4 py-4">
          <a
            href={url}
            title="Ver proyecto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 group">
              <span className="text-lg text-primary group-hover:text-primary-focus">
                Live Demo
              </span>
              <LinkIcon />
            </div>
          </a>
          <a
            href={github}
            title="Ver codigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 group">
              <span className="text-lg text-primary group-hover:text-primary-focus">
                Code
              </span>
              <GithubIcon />
            </div>
          </a>
        </div>
      </div>
    </li>
  );
}

const LinkIcon = () => (
  <svg
    className="fill-primary group-hover:fill-primary-focus"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg
    className="fill-primary group-hover:fill-primary-focus"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
    ></path>
  </svg>
);
