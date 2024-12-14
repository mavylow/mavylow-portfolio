import SkillBar from "./SkillBar";

export const ProjectCard = ({
  imgSrc,
  title,
  description,
  link,
  tools,
}) => (
  <div className="card flex flex-col relative w-[260px] min-h-[370px] h-fit border border-gray-400 rounded-md justify-center items-center pt-2 pb-[1vw]  laptop:w-[30vw]">
    <div className="imgBx h-auto w-[240px] bg-slate-300 rounded-md  laptop:w-[28vw]">
      <img
        className="w-full h-full object-cover "
        src={imgSrc}
        alt={`${title} Preview`}
      />
    </div>
    <div className="content flex flex-col  items-center justify-center h-[180px] flex-grow pb-1 laptop:h-[24vw]">
      <h2 className="text-base pb-[1vw]  laptop:text-[2vw]">
        {title}
      </h2>
      <p className="block text-[9px] font-inter transition-opacity duration-300 px-[2vw] pb-[1vw] laptop:text-[1.1vw]">
        {description}
      </p>
      <a
        href={link}
        className="text-[11px] pb-[1vw] underline laptop:text-[1.1vw]"
      >
        Link to Git
      </a>
      <div className="flex flex-col text-[8px] font-inter  justify-center">
        <p className="text-center text-sm py-[1vw] laptop:text-[1.3vw]">
          Tools used
        </p>
        <div className="flex flex-row gap-3">
          {tools.map((tool) => (
            <SkillBar
              key={tool.name}
              skillName={tool.name}
              percentage={tool.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
