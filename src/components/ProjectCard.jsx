import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link } from "react-router-dom";
import { ui } from "../styles";

export default function ProjectCard({ project, bgColor = "bg-white" }) {
  return <article className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border-[3px] border-black shadow-[7px_7px_0_#000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#000] ${bgColor}`}>
    <Link to={`/projects/${project.id}`} className="relative block overflow-hidden border-b-[3px] border-black bg-white"><img className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src={project.image} alt={`${project.title} preview`}/><span className={`absolute right-3 top-3 rounded-lg border-2 border-black px-2.5 py-1 text-[10px] font-black uppercase shadow-[3px_3px_0_#000] ${project.status === "Completed" ? "bg-[#A3E635]" : "bg-[#FB923C]"}`}>{project.status}</span></Link>
    <div className="flex flex-1 flex-col p-5 md:p-6"><p className="mb-2 text-xs font-black uppercase tracking-[.15em]">Project {String(project.id).padStart(2,"0")}</p><h3 className="text-2xl font-black leading-none tracking-[-.03em]">{project.title}</h3><p className="my-4 font-semibold leading-6 text-black/65">{project.description}</p><div className={ui.stackList}>{(project.techStack??[]).slice(0,4).map((tech)=><span key={tech} className="rounded-full border-2 border-black bg-white px-2.5 py-1 text-[10px] font-black">{tech}</span>)}</div><Link to={`/projects/${project.id}`} className="mt-6 flex min-h-12 items-center justify-between rounded-xl border-[3px] border-black bg-black px-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black">View case study <ArrowOutwardRoundedIcon fontSize="small"/></Link></div>
  </article>;
}
