export const colors = {
  white: "#FFFFFF",
  ink: "#000000",
  yellow: "#FFE66D",
  cyan: "#67E8F9",
  lime: "#A3E635",
  pink: "#FB7185",
  orange: "#FB923C",
};

const focus = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#67E8F9] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export const ui = {
  shell: "mx-auto w-[min(1240px,calc(100%_-_32px))] max-sm:w-[min(100%_-_20px,1240px)]",
  framed: "border-[3px] border-black shadow-[7px_7px_0_#000] rounded-[18px]",
  raised: `border-[3px] border-black shadow-[5px_5px_0_#000] rounded-xl transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] ${focus}`,
  card: "rounded-[20px] border-[3px] border-black bg-white p-[clamp(22px,4vw,48px)] shadow-[8px_8px_0_#000]",
  eyebrow: "m-0 text-xs font-black uppercase tracking-[0.16em] text-black",
  h1: "m-0 text-[clamp(3rem,8vw,6.8rem)] font-black leading-[0.9] tracking-[-0.055em] text-black",
  h1Page: "m-0 max-w-[980px] text-[clamp(2.8rem,7vw,5.8rem)] font-black leading-[0.92] tracking-[-0.05em] text-black",
  h2: "m-0 max-w-[820px] text-[clamp(2.25rem,5vw,4rem)] font-black leading-[0.96] tracking-[-0.04em] text-black",
  bodyText: "text-base font-semibold leading-7 text-black/75 md:text-lg md:leading-8",
  button: `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[3px] border-black px-5 py-3 text-sm font-black uppercase tracking-wide shadow-[5px_5px_0_#000] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] ${focus}`,
  primaryButton: "bg-[#A3E635] text-black",
  secondaryButton: "bg-white text-black",
  dangerButton: "bg-[#FB7185] text-black",
  extraButton: "bg-[#67E8F9] text-black",
  section: "py-16 md:py-24",
  sectionHeading: "mb-9 space-y-4 md:mb-12",
  sectionHeadingContent: "flex items-end justify-between gap-6 max-md:flex-col max-md:items-start",
  stackList: "mt-auto flex flex-wrap gap-2",
  stackItem: "rounded-full border-2 border-black bg-[#FFE66D] px-3 py-1.5 text-xs font-black text-black",
  imageButton: `grid h-12 w-12 cursor-pointer place-items-center rounded-xl border-[3px] border-black bg-[#67E8F9] text-xl font-black shadow-[4px_4px_0_#000] transition-all duration-200 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none ${focus}`,
};
