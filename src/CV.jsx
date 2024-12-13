import "./App.css";

import SkillBar from "./SkillBar";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";
import {
  DayButton,
  Envelop,
  GitHub,
  Linkedin,
  NightButton,
  Tg,
} from "../public/icons";
const photo = "./img/photo.png";
export default function CV() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center ">
      <div
        className={`main max-w-[595px] w-full ${
          theme === "night"
            ? "bg-radial-night-cv"
            : "bg-radial-day-cv"
        } ${
          theme === "night"
            ? "text-font-night"
            : "text-font-day"
        }`}
      >
        <div className="flex justify-end w-full px-5 pb-6 ">
          <div
            className=" cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "night" && <NightButton />}{" "}
            {theme === "day" && <DayButton />}{" "}
          </div>
        </div>
        <div className="flex flex-row w-full px-10 relative ">
          <div className="flex flex-row w-full justify-between phone:h-[114px]">
            <div className="hidden sm:flex flex-col w-1/3 relative ">
              <img
                src={photo}
                className="w-[90px] h-[114px]"
              ></img>
            </div>
            <div className="flex flex-col  relative w-full sm:w-2/3">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-end item-top">
                  <h1 className="text-[22px] text-end sm:text-2xl phone:text-4xl">
                    Sofia Majseenko
                  </h1>
                  <h2 className="text-s text-end sm:text-m phone:text-xl font-extralight">
                    FrontEnd Developer
                  </h2>
                  <p className="text-[8px]">Belarus</p>
                </div>
                <div className="flex flex-col text-[7px] item-bottom justify-between flex-wrap sm:text-[8px] sm:flex-row ">
                  <a href="https://t.me/mavyllow">
                    <span className="flex flex-row gap-1 pr-0.5">
                      <Tg />
                      <p>mavyllow</p>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/sofia-majseenko-92107a1b6/">
                    <span className="flex flex-row gap-1 pr-0.5">
                      <Linkedin />
                      <p>sofia-majseenko</p>
                    </span>
                  </a>
                  <a href="https://github.com/mavylow">
                    <span className="flex flex-row gap-1 pr-0.5 ">
                      <GitHub />
                      <p>mavylow</p>
                    </span>
                  </a>
                  <a href="mailto:majsofia2005@gmail.com">
                    <span className="flex flex-row gap-1  ">
                      <Envelop />
                      <p>majsofia2005@gmail.com</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-4  w-full " />

        <div className="flex flex-row w-full  relative pt-8 ">
          <div className="flex flex-row w-full justify-between px-4 sm:px-10">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold tracking-wide text-[10px] pr-1">
                work
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col">
                <p className="text-[9px]  font-inter font-normal w-11/12">
                  Front-End Developer with a strong focus on
                  creating and maintaining a reusable
                  codebase. Passionate about learning and
                  development, with a desire to apply skills
                  in real-world projects. Eager to tackle
                  complex problems and continuously seek
                  ways to maximize efficiency and improve
                  user experience. Committed to
                  collaborating with teams to deliver
                  high-quality solutions.
                </p>
                <div className="flex justify-end pt-8">
                  <a
                    href="#portfolio"
                    className="text-[10px] border w-20 rounded-[6px] border-[rgb(140,144,154)] flex justify-center  "
                  >
                    my portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-4 w-11/12 " />

        <div className="flex flex-row w-full  relative pt-8 ">
          <div className="flex flex-row w-full justify-between px-4 sm:px-10">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold text-[10px] tracking-wide pr-1 ">
                skills & tools
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col font-inter ">
                <div className="flex flex-col mb-4">
                  <p className=" text-[10px] pb-1 ">
                    Underline indicators
                  </p>
                  <div className="flex flex-row font-inter flex-wrap gap-2">
                    <SkillBar
                      skillName="Low quality"
                      percentage={30}
                    />
                    <SkillBar
                      skillName="High quality"
                      percentage={100}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-bold text-[10px] pb-2 ">
                    languages
                  </p>
                  <div className="flex flex-row font-inter flex-wrap gap-2">
                    <SkillBar
                      skillName="HTML"
                      percentage={100}
                    />
                    <SkillBar
                      skillName="CSS/SCSS"
                      percentage={100}
                    />
                    <SkillBar
                      skillName="JavaScript"
                      percentage={100}
                    />
                    <SkillBar
                      skillName="TypeScript"
                      percentage={60}
                    />

                    <SkillBar
                      skillName="SQL"
                      percentage={30}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-bold text-[10px] pb-2 pr-1">
                    technologies
                  </p>
                  <div className="flex flex-row font-inter gap-2 flex-wrap">
                    <SkillBar
                      skillName="Tailwind CSS"
                      percentage={100}
                    />
                    <SkillBar
                      skillName="React"
                      percentage={100}
                    />
                    <SkillBar
                      skillName="Next.js"
                      percentage={70}
                    />
                    <SkillBar
                      skillName="Bootstrap"
                      percentage={30}
                    />

                    <SkillBar
                      skillName="MongoDB"
                      percentage={30}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-bold text-[10px] pb-2 ">
                    tools & softwares
                  </p>
                  <div className="flex flex-row font-inter gap-2 flex-wrap">
                    <SkillBar
                      skillName="VS Code"
                      percentage={100}
                    />
                    <SkillBar
                      skillName="Node.js"
                      percentage={40}
                    />
                    <SkillBar
                      skillName="Git"
                      percentage={40}
                    />
                    <SkillBar
                      skillName="Adobe Photoshop"
                      percentage={60}
                    />
                    <SkillBar
                      skillName="Figma"
                      percentage={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-4  w-11/12 " />

        <div className="flex flex-row w-full  relative pt-4 ">
          <div className="flex flex-row w-full justify-between px-4 sm:px-10">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold text-[10px] tracking-wide text-wrap pr-1">
                education
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col">
                <p className="text-[9px] font-inter  ">
                  2023 - present
                </p>
                <div className="text-[9px]  font-inter w-11/12 pt-2">
                  <p className="font-bold">
                    Belarusian State University
                  </p>
                  Mathematical and Software Engineering for
                  mobile devices
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-4  w-11/12 " />

        <div className="flex flex-row w-full justify-center relative pt-4 mb-8  ">
          <div className="flex flex-row w-full justify-between px-4 sm:px-10">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold text-[10px] tracking-wide pr-1 ">
                languages
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col">
                <p className="text-[9px] font-inter ">
                  Russian - C2
                </p>
                <p className="text-[9px] font-inter ">
                  English - B2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
