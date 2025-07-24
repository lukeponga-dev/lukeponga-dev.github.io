import NZWebsiteImg from '../assets/images/new-zealand-website-screenshot.jpg';
import DoctorsAppImg from '../assets/images/doctors-appointments-screenshot.jpg';
import HealthClinicImg from '../assets/images/health-clinic-mvc-screenshot.jpg';

const projectData = [
    {
        img: NZWebsiteImg,
        title: "New Zealand Website",
        description: "A responsive site showcasing NZ's culture and tourism...",
        tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
        liveUrl: "https://lukeponga-dev.github.io/NZ-Website/index.html",
        sourceUrl: "https://github.com/lukeponga-dev/NZ-Website/"
    },
    // ... other projects
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="row g-4">
                    {projectData.map(project => (
                        <div className="col-md-6 col-lg-4" key={project.title}>
                            <div className="project-card">
                                <img src={project.img} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-description">{project.description}</p>
                                    <div className="tech-tags">
                                        {project.tags.map(tag => <span className="badge" key={tag}>{tag}</span>)}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;