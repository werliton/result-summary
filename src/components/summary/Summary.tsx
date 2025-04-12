import {
  IconMemory,
  IconReaction,
  IconVerbal,
  IconVisual,
} from "@/assets/images";
import clsx from "clsx";

type colors = "red" | "yellow" | "blue" | "green";
type TItem = {
  name: string;
  value: number;
  color: colors;
  icon: any;
};

const ITEMS: TItem[] = [
  {
    name: "Reaction",
    value: 80,
    icon: IconReaction,
    color: "red",
  },
  {
    name: "Memory",
    value: 92,
    icon: IconMemory,
    color: "yellow",
  },
  {
    name: "Verbal",
    value: 61,
    icon: IconVerbal,
    color: "green",
  },
  {
    name: "Visual",
    value: 72,
    icon: IconVisual,
    color: "blue",
  },
];

const styles: {
  [key: string]: {
    text: string;
    bg: string;
    hover: string;
  };
} = {
  red: {
    text: "text-light-red",
    bg: "bg-light-red/10",
    hover: "hover:bg-light-red/20",
  },
  yellow: {
    text: "text-orangey-yellow",
    bg: "bg-orangey-yellow/10",
    hover: "hover:bg-orangey-yellow/20",
  },
  green: {
    text: "text-green-teal",
    bg: "bg-green-teal/10",
    hover: "hover:bg-green-teal/20",
  },
  blue: {
    text: "text-cobalt-blue",
    bg: "bg-cobalt-blue/10",
    hover: "hover:bg-cobalt-blue/20",
  },
};

const SumaryItem = ({ icon: Icon, name, value, color }: TItem) => {
  const { text, bg, hover } = styles[color];

  return (
    <div
      className={clsx(
        "flex justify-between p-4 rounded-xl text-base",
        bg,
        hover
      )}
    >
      <div className="flex gap-2">
        <img src={Icon} alt="logo" />
        <span className={clsx("font-black", text)}>{name}</span>
      </div>

      <div className="opacity-70">
        <span className="font-black">{value}</span>
        <span className="font-medium"> / 100</span>
      </div>
    </div>
  );
};

export const Summary = () => {
  return (
    <section className="p-4 summary">
      <h2 className="font-semibold text-sm">Summary</h2>

      <div className="flex flex-col gap-6 my-8">
        {ITEMS.map((item) => (
          <SumaryItem key={item.name} {...item} />
        ))}
      </div>

      <button className="bg-dark-gray-blue hover:bg-dark-gray-blue/80 text-white text-center font-medium mt-4 rounded-full w-full p-3">
        Continue
      </button>
    </section>
  );
};
