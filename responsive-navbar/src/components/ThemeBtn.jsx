import React from "react";
import useTheme from "../context/Theme";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkThemestatus = e.currentTarget.checked
    if (darkThemestatus){
        darkTheme()
    }else{
        lightTheme()
    }
  };
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <div className="w-8 h-8 p-2 flex items-center justify-between bg-gray-200 rounded-full  dark:bg-gray-700">
          <FaSun
            className={`text-yellow-500 ${
              themeMode === "dark" ? "hidden" : "block"
            }`}
          />
          <FaMoon
            className={`text-blue-500 ${
              themeMode === "dark" ? "block" : "hidden"
            }`}
          />
        </div>
      </label>
    </div>
  );
}

export default ThemeBtn;
