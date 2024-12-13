import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import {
  Envelop,
  GitHub,
  Linkedin,
  Tg,
} from "../public/icons";
import { ProjectCard } from "./ProjectCard";

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center">
      <div
        className={`portfolio max-w-[595px] mb-2 w-full ${theme}`}
      >
        <div className="flex justify-end py-5 text-[22px]  sm:text-2xl phone:text-3xl px-10">
          Portfolio
        </div>
        <hr className="border-t border-[rgba(140,144,154,0.4)]  w-full " />

        <div className="flex flex-wrap relative items-center justify-center gap-6 my-10 ">
          <ProjectCard
            imgSrc={"../public/gif/Todo.gif"}
            title="Todo App"
            description=" The ToDo List application with multi-level
                filtering by difficulty is a powerful tool
                for task management. It helps users organize
                their time handle their responsibilities.
                With the ability manage tasks, it becomes an
                indispensable assistant in daily life."
            link="https://github.com/mavylow/todolist.git"
            tools={[
              { name: "HTML", percentage: 100 },
              { name: "CSS", percentage: 100 },
              { name: "React", percentage: 100 },
            ]}
          />

          <ProjectCard
            imgSrc={"../public/gif/Lamoda2.gif"}
            title="Shop Website"
            description="The Shop Website is a modern web application
                designed to provide users with a seamless
                shopping experience. It showcases multiple
                filtering and sorting, provides simple
                adding any new filter or sorting."
            link="https://github.com/mavylow/ShopWebsite.git"
            tools={[
              { name: "HTML", percentage: 100 },
              { name: "CSS", percentage: 100 },
              { name: "React", percentage: 100 },
              { name: "Tailwind", percentage: 100 },
            ]}
          />

          <ProjectCard
            imgSrc={"../public/gif/SPA.gif"}
            title="SPA"
            description="This project showcases a simple Single Page
                Application (SPA) developed using React and
                React Router. The main objective of this
                application is to provide a fluid and
                responsive user experience by enabling
                seamless navigation between various
                components without the need for full page
                reloads."
            link="https://github.com/mavylow/SPA.git"
            tools={[
              { name: "HTML", percentage: 100 },
              { name: "CSS", percentage: 100 },
              { name: "React", percentage: 100 },
              { name: "Tailwind", percentage: 100 },
            ]}
          />

          <ProjectCard
            imgSrc={"../public/gif/Notion.gif"}
            title="Notion"
            description="This project is a note-taking application
                inspired by Notion, built with React. It
                features user authentication and
                functionalities for creating, managing, and
                organizing notes. The application provides a
                user-friendly interface and allows for a
                smooth note-taking experience."
            link="https://github.com/mavylow/Notion.git"
            tools={[
              { name: "HTML", percentage: 100 },
              { name: "CSS", percentage: 100 },
              { name: "React", percentage: 100 },
              { name: "Tailwind", percentage: 100 },
            ]}
          />
        </div>

        <hr className="border-t border-[rgba(140,144,154,0.4)]  w-full " />

        <div className=" py-4 flex flex-col px-10 text-[7px] item-bottom justify-between flex-wrap sm:text-[8px] sm:flex-row ">
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
  );
};

export default Portfolio;
