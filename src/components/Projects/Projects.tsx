import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ProjectImage from './ProjectImage';
import projects from './ProjectsData';

const Projects = () => {
	return (
        <section id="projects" className='container mx-auto' style={{ overflowX: 'hidden' }}>
			<div className="w-3/4 mx-auto">
				<div className="w-full text-white text-center py-2">
					<h1>Projects</h1>
				</div>
				{projects.map((project, index) => {
					const { title, description, languages, image, imageClass } = project;
					const [ref, inView] = useInView({
						triggerOnce: true,
					});
					const props = useSpring({
						opacity: inView ? 1 : 0,
						transform: inView ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '100%' : '-100%'})`,
                        config: { ...config.slow, duration: 1000 },
						delay: 300,
					});
					const alignment = index % 2 === 0 ? 'justify-start' : 'justify-end';

					return (
						<animated.div
							ref={ref}
							style={props}
							className={`flex ${alignment}`}
							key={index}
						>
							{index % 2 === 0 ? (
								<>
									<ProjectImage image={image} title={title} imageClass={imageClass} />
									<ProjectCard title={title} description={description} languages={languages} />
								</>
							) : (
								<>
									<ProjectCard title={title} description={description} languages={languages} />
									<ProjectImage image={image} title={title} imageClass={imageClass} />
								</>
							)}
						</animated.div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;