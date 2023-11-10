import React, { useState } from "react";
import Card from "./Card/Card";

const Theme = ({ changeTheme, themeNames, name }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const themeClick = (theme) => {
    setShowDropDown(false);
    changeTheme(theme);
  };
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">Theme</p>
          <p className="text-sm">{name}</p>
        </div>

        <div style={{ position: "relative" }}>
          <button
            className="focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
            onClick={() => setShowDropDown((current) => !current)}
            style={{ position: "relative" }}
          >
            Change Theme
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {showDropDown && (
            <div
              id="dropdown"
              className="z-10  divide-y rounded-lg shadow w-44 dwbg"
              style={{ position: "absolute", top: "50px" }}
            >
              <ul
                className="py-2 text-sm"
                aria-labelledby="dropdownDefaultButton"
              >
                {themeNames.map((theme, key) => (
                  <li onClick={() => themeClick(theme)} key={key}>
                    <p className="block px-4 py-2 dwtxt">{theme}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Theme;
