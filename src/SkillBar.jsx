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
        className={`flex justify-center text-[9px]  w-auto px-2 pt-0.5 rounded-[6px] z-20 h-4 laptop:text-[1.1vw] laptop:h-[1.7vw] ${
          theme === "night" ? "bg-night-bg" : "bg-day-bg"
        }`}
      >
        {skillName}
      </span>
      <div
        className={`px-2 rounded-[6px] absolute  h-[18px] ${
          theme === "night"
            ? "bg-night-progress"
            : "bg-day-progress"
        }  z-10 laptop:h-[1.9vw] rounded-[8px]`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div
        className={`px-2 rounded-[6px] absolute  h-[18px]  ${
          theme === "night" ? "bg-night-bg" : "bg-day-bg"
        } z-0 w-full laptop:h-[1.9vw] rounded-[8px]`}
      ></div>
      <div
        className={`px-2 rounded-[6px] absolute z-30 h-[18px]  w-full border laptop:rounded-[8px] ${
          theme === "night"
            ? "border-night-progress"
            : "border-day-progress"
        } laptop:h-[1.9vw] rounded-[8px]`}
      ></div>
    </div>
  );
}
