import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaBootstrap, FaMountain } from 'react-icons/fa';
import { GiMountainClimbing, GiJuggler, GiHealthNormal } from "react-icons/gi";
import { MdOutlinePedalBike } from "react-icons/md";
import Image from 'next/image';
import yoyoIcon from '../../public/assets/yoyo(2).png';

type Skill = {
    name: string;
    icon: JSX.Element;
};

const skills: Skill[] = [
	{ name: 'HTML', icon: <FaHtml5 /> },
	{ name: 'CSS', icon: <FaCss3Alt /> },
	{ name: 'Bootstrap', icon: <FaBootstrap /> },
	{ name: 'MUI', icon: <FaReact /> },
	{ name: 'JavaScript', icon: <FaJsSquare /> },
	{ name: 'TypeScript', icon: <FaNodeJs /> },
	{ name: 'MongoDB', icon: <FaDatabase /> },
	{ name: 'Express', icon: <FaNodeJs /> },
	{ name: 'React', icon: <FaReact /> },
	{ name: 'Node.js', icon: <FaNodeJs /> },
	{ name: 'Next.js', icon: <FaReact /> },
    { name: 'Yo-Yoer', icon: <Image src={yoyoIcon} alt="Yo-Yoer" width={25} height={25} style={{ marginLeft: '10px' }} /> },	{ name: 'Juggler', icon: <GiJuggler /> },
	{ name: 'EMT', icon: <GiHealthNormal /> },
	{ name: 'Mountaineer Guide', icon: <FaMountain /> },
	{ name: 'Rock Climber', icon: <GiMountainClimbing /> },
	{ name: 'Mountain Biker', icon: <MdOutlinePedalBike /> },
];

const SkillsScroll = () => {
    const [selectedSkill, setSelectedSkill] = React.useState<Skill | null>(null);

    const handleCardClick = (skill: Skill) => {
        setSelectedSkill(skill);
        // Display more information about the skill
    };

    return (
        <section className="flex justify-center items-center">
            <div className="scroll">
                <div className="scrolling">
                    {skills.map((skill) => (
                        <div key={skill.name} onClick={() => handleCardClick(skill)} className="skills-card-div">
                        <span className="skills-card-span">
                            <div className="skills-content">
                                    {skill.icon}
                                    <span className="skills-text">{skill.name}</span>
                                </div>
                            </span>
                        </div>
                    ))}
                    {skills.map((skill) => (
                        <div key={skill.name + 'duplicate'} onClick={() => handleCardClick(skill)} className="skills-card-div">
                        <span className="skills-card-span">
                            <div className="skills-content">
                                    {skill.icon}
                                    <span className="skills-text">{skill.name}</span>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsScroll;