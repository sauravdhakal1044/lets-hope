import React, { useEffect, useState, useContext } from "react";
import ThemeContext from '../../contexts/ThemeContext';


function CanvasEffectMobile() {
    const [theme, settheme] = useState("dark")
    const { theme: { value } } = useContext(ThemeContext)

    useEffect(() => {
        const currTheme = localStorage.getItem("theme")
        settheme(currTheme)
    }, [value, theme])

    const skills = [
        { href: "#git_", title: "Git" },
        { href: "#github", title: "Github" },
        { href: "#html_", title: "HTML 5" },
        { href: "#react_", title: "ReactJS" },
        { href: "#mongoDB", title: "mongoDB" },
        { href: "#npm_", title: "npm" },
        { href: "#css_", title: "CSS 3" },
        { href: "#js_", title: "JavaScript" },
        { href: "#node.js_", title: "Node.js" },
        { href: "#expressjs", title: "Express.js" },
        { href: "#tailwindcss", title: "TailwindCss" },
        { href: "#bootstrap", title: "Bootstrap" },
        { href: "#ui/ux", title: "UI/UX" },
        { href: "#next.js", title: "NextJS" },
        { href: "#three.js", title: "ThreeJS" },
        { href: "#illustrator_", title: "Illustrator" },
        { href: "#firebase", title: "Firebase" },
        { href: "#cannonjs", title: "CannonJs" },
    ];

    useEffect(() => {
        setTimeout(() => {
            TagCanvas.wheelZoom = false;
            TagCanvas.textFont = "Raleway, sans-serif";
            TagCanvas.textColour = theme === "dark" ? "cyan" : "#241835";
            TagCanvas.textHeight = 15;
            TagCanvas.outlineMethod = "size";
            TagCanvas.outlineIncrease = 10;
            TagCanvas.maxSpeed = 0.08;
            TagCanvas.minBrightness = 0.2;
            TagCanvas.depth = 0.5;
            TagCanvas.pulsateTo = 0.6;
            TagCanvas.initial = [0.1, -0.1];
            TagCanvas.decel = 0.98;
            TagCanvas.reverse = true;
            TagCanvas.hideTags = false;
            TagCanvas.shadow = false;
            TagCanvas.shadowBlur = 3;
            TagCanvas.weight = false;
            TagCanvas.imageScale = null;
            TagCanvas.fadeIn = 1000;
            TagCanvas.clickToFront = 600;
            TagCanvas.width = window.innerWidth / 2;
            TagCanvas.height = window.innerHeight;

            try {
                TagCanvas.Start("tagcanvasMobile", "taglistMobile");
            } catch (e) {
                console.log("Canvas error.");
            }
        }, 1000);

    }, [theme])

    return (
        <>
            <div className="  ">
                <div id="skill-sphere">
                    <canvas
                        id="tagcanvasMobile"
                        height="280"
                        className="to-fade-in fast-anim w-screen"
                    >
                    </canvas>
                </div>
                <div id="taglistMobile" style={{ display: 'none' }}>
                    <ul>
                        {skills.map(skill => (
                            <li key={skill.title}>
                                <a href={skill.href}>
                                    <span className=" text-sm text-cyan-400 ">
                                        {skill.title}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CanvasEffectMobile