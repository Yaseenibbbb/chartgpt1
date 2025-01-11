import React from "react";

const Info: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="my-4 px-5 py-4 overflow-hidden rounded-xl border border-sky-400 bg-sky-50">
      <div className="flex h-full items-center">
        <div className="mt-0.5 w-4 mr-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-sky-500"
            aria-label="Note"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 1.3C10.14 1.3 12.7 3.86 12.7 7C12.7 10.14 10.14 12.7 7 12.7C5.48908 12.6974 4.0408 12.096 2.97241 11.0276C1.90403 9.9592 1.30264 8.51092 1.3 7C1.3 3.86 3.86 1.3 7 1.3ZM7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C10.86 14 14 10.86 14 7C14 3.14 10.86 0 7 0ZM8 3H6V8H8V3ZM8 9H6V11H8V9Z"
            ></path>
          </svg>
        </div>
        <div className="flex-1 text-sm prose overflow-x-auto text-sky-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Info;