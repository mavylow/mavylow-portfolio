import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

export default function SkillBar({
  skillName,
  percentage,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col w-auto relative ">
      <span
        className={`flex justify-center text-[10px] py-1  w-auto px-2 pt-0.5 rounded-[6px] z-20 h-4 laptop:text-[1.1vw] laptop:h-[2.2vw] laptop:px-2 lg:px-3 laptop:pt-1  laptop:rounded-[0.7vw] laptop:min-w-13 lg:min-w-15 ${
          theme === "night" ? "bg-night-bg" : "bg-day-bg"
        }`}
      >
        {skillName}
      </span>
      <div
        className={`px-2 rounded-[6px] absolute  h-[19px] ${
          theme === "night"
            ? "bg-night-progress"
            : "bg-day-progress"
        }  z-10 laptop:h-[2.5vw] laptop:rounded-[0.7vw]`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div
        className={`px-2 rounded-[6px] absolute  h-[19px]  ${
          theme === "night" ? "bg-night-bg" : "bg-day-bg"
        } z-0 w-full laptop:h-[2.5vw] laptop:rounded-[0.7vw]`}
      ></div>
      <div
        className={`px-2 rounded-[6px] absolute z-30 h-[19px]  w-full border  ${
          theme === "night"
            ? "border-night-progress"
            : "border-day-progress"
        } laptop:h-[2.5vw] laptop:rounded-[0.7vw] laptop:border-1 lg:border-1.5`}
      ></div>
    </div>
  );
}
