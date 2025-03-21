import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] select-none pointer-events-none">
      <Image
        href="https://github.com/salmansajidsattar/Salman-Sajid-Portfolio/blob/main/public/bulb.png"
        alt="bulb"
        width={200}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
