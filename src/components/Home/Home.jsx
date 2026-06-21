import React, {useEffect, useState} from "react";
import "./Home.css";
import useAOS from "../../hooks/useAOS";
import { HiOutlineMail } from "react-icons/hi"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../NavBar/SangJunLee_Resume.pdf";

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [command, setCommand] = useState("");
    const [currentPath, setCurrentPath] = useState("~");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const SOCIAL_LINKS = [
        {
            href: "https://www.linkedin.com/in/sangjunnlee/",
            Icon: FaLinkedin,
            ariaLabel: "LinkedIn Profile"
        },
        {
            href: "https://github.com/sangjunnlee",
            Icon: FaGithub,
            ariaLabel: "GitHub Profile"
        },
        {
            href: "mailto:sjlee9920@gmail.com",
            Icon: HiOutlineMail,
            ariaLabel: "Email Contact"
        }
    ];

    useAOS();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const commandTargets = [
        {
            aliases: ["experience", "experiences"],
            section: "experience",
            path: "~/experience",
            output: [
                "~/experience"
            ]
        },
        {
            aliases: ["projects", "project"],
            section: "projects",
            path: "~/projects",
            output: [
                "~/projects"
            ]
        },
        {
            aliases: ["contact"],
            section: "contact",
            path: "~/contact",
            output: [
                "~/contact"
            ]
        }
    ];

    const appendHistory = (entries) => {
        setHistory((previous) => [...previous, ...entries]);
    };

    const runCommand = (rawCommand) => {
        const trimmedCommand = rawCommand.trim();
        if (!trimmedCommand) {
            return;
        }

        const normalizedCommand = trimmedCommand.toLowerCase().replace(/\s+/g, " ");

        if (normalizedCommand === "clear") {
            setHistory([]);
            setCommand("");
            return;
        }

        const commandEntry = { type: "command", text: trimmedCommand, path: currentPath };
        const addOutput = (lines) => appendHistory([commandEntry, { type: "output", lines }]);

        if (normalizedCommand === "help") {
            addOutput([
                "available commands:",
                "ls, cd experience, cd projects, cd resume, cd contact, cd .., pwd, whoami, clear"
            ]);
            setCommand("");
            return;
        }

        if (normalizedCommand === "ls") {
            addOutput(["experience/", "projects/", "contact/", "resume.pdf"]);
            setCommand("");
            return;
        }

        if (normalizedCommand === "pwd") {
            addOutput([currentPath]);
            setCommand("");
            return;
        }

        if (normalizedCommand === "whoami") {
            addOutput(["SangJun Lee", "software engineer, builder, and EECS student at UC Berkeley"]);
            setCommand("");
            return;
        }

        if (["cd ..", "cd ~", "cd home", "home"].includes(normalizedCommand)) {
            setCurrentPath("~");
            scrollToSection("home");
            addOutput(["returned to ~/"]);
            setCommand("");
            return;
        }

        if (["cd resume", "open resume", "resume"].includes(normalizedCommand)) {
            setCurrentPath("~/resume");
            const resumeWindow = window.open(resume, "_blank", "noopener,noreferrer");
            if (resumeWindow) {
                resumeWindow.opener = null;
            }
            addOutput(["opening resume.pdf in a new tab"]);
            setCommand("");
            return;
        }

        const targetName = normalizedCommand.startsWith("cd ")
            ? normalizedCommand.replace("cd ", "")
            : normalizedCommand;
        const matchedTarget = commandTargets.find((target) => target.aliases.includes(targetName));

        if (matchedTarget) {
            setCurrentPath(matchedTarget.path);
            scrollToSection(matchedTarget.section);
            addOutput(matchedTarget.output);
            setCommand("");
            return;
        }

        addOutput([
            `command not found: ${trimmedCommand}`,
            "try help, ls, or cd experience"
        ]);
        setCommand("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        runCommand(command);
    };

    const quickCommands = [
        { label: "List", command: "ls" },
        { label: "Experience", command: "cd experience" },
        { label: "Projects", command: "cd projects" },
        { label: "Resume", command: "cd resume" },
        { label: "Contact", command: "cd contact" }
    ];

    return (
        <div className="home-container">
            <div className={`home-content ${isVisible ? 'visible' : ''}`}>
                <div className="left-content">
                    <div className="profile-shell" data-aos="fade-up">
                        <img 
                            src="/assets/about/headshot.jpg" 
                            alt="SangJun's portrait" 
                            className="profile-image" 
                        />
                    </div>
                    <div className="icon-container">
                        {SOCIAL_LINKS.map(({ href, Icon, ariaLabel }) => (
                            <a 
                                key={href} 
                                href={href} 
                                aria-label={ariaLabel}
                                className="social-icon"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="right-content">
                    <div className="terminal-window" data-aos="fade-down">
                        <div className="shell-bar">
                            <p>sangjun@portfolio:{currentPath}</p>
                        </div>
                        <div className="terminal-body">
                            <h1 className="home-title">
                                Hi, I'm SangJun Lee
                            </h1>
                            <p className="home-summary">
                                Software engineer focused on backend systems, AI infrastructure, and developer tools.
                            </p>
                            {history.length > 0 && (
                                <div className="terminal-output" aria-live="polite">
                                    {history.map((entry, index) => (
                                        <div key={`${entry.type}-${index}`} className={`history-entry ${entry.type}`}>
                                            {entry.type === "command" ? (
                                                <p><span>sangjun@portfolio:{entry.path}$</span> {entry.text}</p>
                                            ) : (
                                                entry.lines.map((line) => <p key={`${line}-${index}`}>{line}</p>)
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <form className="command-line" onSubmit={handleSubmit}>
                                <label htmlFor="portfolio-command">sangjun@portfolio:{currentPath}$</label>
                                <input
                                    id="portfolio-command"
                                    value={command}
                                    onChange={(event) => setCommand(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            event.preventDefault();
                                            runCommand(command);
                                        }
                                    }}
                                    placeholder="cd experience"
                                    autoComplete="off"
                                />
                                <button type="submit">run</button>
                            </form>
                            <div className="quick-commands" aria-label="Quick commands">
                                {quickCommands.map(({ label, command: quickCommand }) => (
                                    <button
                                        key={quickCommand}
                                        type="button"
                                        onClick={() => runCommand(quickCommand)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default Home;
