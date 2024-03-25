import React from 'react';

interface ProjectImageProps {
    image: string;
    title: string;
    imageClass: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, title, imageClass }) => {
    return (
        <img src={image} alt={title} className={`max-w-screen-md mx-auto w-1/2 rounded shadow-lg m-4 ${imageClass}`} />
    );
};

export default ProjectImage;