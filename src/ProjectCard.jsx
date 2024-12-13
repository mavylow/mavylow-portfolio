import SkillBar from "./SkillBar";

export const ProjectCard = ({
  imgSrc,
  title,
  description,
  link,
  tools,
}) => (
  <div className="card flex flex-col relative w-[220px] min-h-[150px] h-fit border border-gray-400 rounded-md justify-center items-center pt-1 pb-2">
    <div className="imgBx h-[95px] w-[200px] bg-slate-300 rounded-md transition-all duration-600">
      <img
        className="w-full h-full object-cover"
        src={imgSrc}
        alt={`${title} Preview`}
      />
    </div>
    <div className="content flex flex-col items-center justify-center h-[180px] flex-grow pb-1">
      <h2 className="text-base py-1">{title}</h2>
      <p className="block text-[8px] font-inter transition-opacity duration-300 px-2 pb-1">
        {description}
      </p>
      <a href={link} className="text-[10px] underline">
        Link to Git
      </a>
      <div className="flex flex-col text-[8px] font-inter transition-opacity duration-300 justify-center">
        <p className="text-center text-sm py-1">
          Tools used
        </p>
        <div className="flex flex-row gap-2">
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
