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
        className={`main w-full ${
          theme === "night"
            ? "bg-radial-night-cv"
            : "bg-radial-day-cv"
        } ${
          theme === "night"
            ? "text-font-night"
            : "text-font-day"
        } phone:max-w-[100vw] ipad:max-w-[80vw]  laptop:max-w-[75vw]  `}
      >
        <div className="flex justify-end w-full p-5 pb-6 laptop:p-10 laptop:pb-[4vw]  ">
          <div
            className=" cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "night" && <NightButton />}{" "}
            {theme === "day" && <DayButton />}{" "}
          </div>
        </div>
        <div className="flex flex-row w-full px-10 relative laptop:px-[5vw] ">
          <div className="flex flex-row w-full justify-between phone:h-[114px] laptop:h-[200px] laptop:mb-[2vw]">
            <div className="hidden sm:flex flex-col w-1/3 relative ">
              <img
                src={photo}
                className="w-[90px] h-[114px] laptop:h-[200px] laptop:w-[165px]"
              ></img>
            </div>
            <div className="flex flex-col  relative w-full sm:w-2/3">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-end item-top">
                  <h1 className="text-[23px] text-end sm:text-2xl phone:text-[27px] ipad:text-[5vw] laptop:text-[5vw]">
                    Sofia Majseenko
                  </h1>
                  <h2 className="text-s text-end sm:text-m phone:text-xl ipad:text-[3vw]  laptop:text-[3vw] laptop:pt-[2vw] laptop:pb-[1vw] ">
                    FrontEnd Developer
                  </h2>
                  <p className="text-[9px] laptop:text-[1vw] ">
                    Belarus
                  </p>
                </div>
                <div className="flex flex-col text-[8px] item-bottom justify-between flex-wrap sm:text-[8px] sm:flex-row laptop:text-[1vw] ">
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

        <div className="flex flex-row w-full  relative pt-[5vw] ">
          <div className="flex flex-row w-full justify-between px-10 laptop:px-[5vw]">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold tracking-wide text-[11px] pr-1 laptop:text-[1.3vw]">
                work
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col">
                <p className="text-[10px]  font-inter font-normal w-11/12 laptop:text-[1.1vw]">
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
                    className="text-[11px] border px-[0.5vw] rounded-[0.7vw] border-[rgb(140,144,154)] flex justify-center laptop:text-[1.3vw] laptop:border-2 w-auto  "
                  >
                    my portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-[5vw] w-11/12 " />

        <div className="flex flex-row w-full  relative pt-[1vw] px-10 laptop:px-[5vw]">
          <div className="flex flex-row w-full justify-between ">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold text-[11px] tracking-wide pr-1 laptop:text-[1.3vw] ">
                skills & tools
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col font-inter ">
                <div className="flex flex-col mb-4">
                  <p className=" text-[11px] pb-[1vw] laptop:text-[1vw]">
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
                  <p className="font-bold text-[11px] pb-[1vw] laptop:text-[1vw]">
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
                      percentage={50}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-bold text-[11px] pb-[1vw] pr-1 laptop:text-[1vw]">
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
                  <p className="font-bold text-[11px] pb-[1vw] laptop:text-[1vw]">
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
                      percentage={60}
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

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-[4vw]  w-11/12 " />

        <div className="flex flex-row w-full  relative pt-[1vw] px-10 laptop:px-[5vw]">
          <div className="flex flex-row w-full justify-between ">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold text-[11px] tracking-wide text-wrap pr-1 laptop:text-[1.3vw]">
                education
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col text-[10px] font-inter laptop:text-[1.1vw]">
                <p className="pb-[1vw]"> 2023 - present</p>
                <div>
                  <p className="font-bold ">
                    Belarusian State University
                  </p>
                  Mathematical and Software Engineering for
                  mobile devices
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  my-[4vw]  w-11/12 " />

        <div className="flex flex-row w-full justify-center relative pt-[1vw] mb-[5vw] px-10 laptop:px-[5vw]  ">
          <div className="flex flex-row w-full justify-between ">
            <div className="flex flex-col w-1/3 relative">
              <p className="font-bold text-[11px] tracking-wide pr-1 laptop:text-[1.3vw]">
                languages
              </p>
            </div>
            <div className="flex flex-col w-2/3 relative">
              <div className="flex flex-col text-[10px] laptop:text-[1.1vw] font-inter ">
                <p>Russian - C2</p>
                <p>English - B2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
