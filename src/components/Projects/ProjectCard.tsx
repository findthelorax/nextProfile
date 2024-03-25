import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    languages: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages }) => {
    return (
        <div className="max-w-screen-md mx-auto m-6 rounded shadow-lg bg-cyan-600">
            <div className="px-6 py-4">
                <div className="font-bold text-center text-xl mb-2">{title}</div>
                <p className="text-black text-base">{description}</p>
                <div className="px-6 pt-4 pb-2">
                    {languages.map((lang, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;