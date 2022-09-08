import gsap from "gsap";

let playTransition = () => {
  if (window.location.pathname === "/home") startCanvas(1250);
  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0.5,
    pointerEvents: "all",
    height: "100%",
    top: "unset",
    bottom: "0%",
  });
  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0.5,
    delay: 1,
    pointerEvents: "all",
    height: "0%",
    top: "0%",
    bottom: "unset",
  });
}
let startTransition = () => {
  startCanvas(500);
  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0,
    pointerEvents: "all",
    height: "100%",
    top: "unset",
    bottom: "0%",
  });
  gsap.to(".page-transition", {
    ease: "power1.inOut",
    duration: 0.5,
    delay: 1,
    pointerEvents: "all",
    height: "0%",
    top: "0%",
    bottom: "unset",
  });
}
let startCanvas = (duration) => {
  if (typeof window.startCanvas === "function") window.startCanvas();
  else setTimeout(() => startCanvas(duration), duration);
};

export default function PageTransition() {
  return (

    <div className="page-transition fixed  z-50  w-full flex justify-center items-center bg-[#CBBAF4] dark:bg-[#111827] ">
      <div className="my-name h-fit w-fit text-6xl text-lightTextColo  m-auto z-50 whitespace-nowrap dark:text-white text-gray-800">
        Sisir <span className="text-border dark:text-border-light">Dhakal</span>
      </div>
      <img
        src="/assets/images/blur-ball-orange.webp"
        className="absolute m-auto inset-0 -translate-x-1/4 dark:opacity-60 dark:hidden pointer-events-none"
      />
      <img
        src="/assets/images/blur-ball-orange.webp"
        className="absolute m-auto inset-0 -translate-x-1/4 dark:opacity-60 dark:block hidden pointer-events-none"
      />
    </div>
  );
}

export { playTransition, startTransition };