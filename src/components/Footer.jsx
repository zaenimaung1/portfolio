import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Link } from "react-router-dom";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const { person, socials } = usePortfolioStore();
  return <footer className="mt-16 border-t-[3px] border-black bg-black py-12 text-white"><div className={`${ui.shell} grid gap-10`}>
    <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#FFE66D]">Have an idea?</p><h2 className="max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-black leading-[.92] tracking-[-.05em]">Let’s make it<br/><span className="text-[#67E8F9]">work beautifully.</span></h2></div><Link to="/contact" className={`${ui.button} bg-[#FB923C] text-black`}>Start a conversation</Link></div>
    <div className="flex flex-col gap-5 border-t-2 border-white/30 pt-6 md:flex-row md:items-center md:justify-between"><p className="text-sm font-bold">© {new Date().getFullYear()} {person.name}. Built with care in Myeik.</p><div className="flex flex-wrap gap-2">{socials.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-xl border-2 border-white bg-white text-xl text-black transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-[#67E8F9]"><SocialIcon name={social.icon}/></a>)}<button type="button" aria-label="Back to top" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="grid h-11 w-11 place-items-center rounded-xl border-2 border-white bg-[#A3E635] text-black"><ArrowUpwardRoundedIcon /></button></div></div>
  </div></footer>;
}
