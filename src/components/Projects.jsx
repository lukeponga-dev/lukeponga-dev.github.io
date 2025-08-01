import NZWebsiteImg from '../assets/images/new-zealand-website-screenshot.jpg';
import DoctorsAppImg from '../assets/images/doctors-appointments-screenshot.jpg';
import HealthClinicImg from '../assets/images/health-clinic-mvc-screenshot.jpg';
import cosmic from '../assets/images/cosmic.png';

const projectData = [
    {
        img: require('../assets/images/new-zealand-website-screenshot.jpg'),
        title: "New Zealand Website",
        description: "A responsive site showcasing NZ's culture and tourism...",
        tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
        liveUrl: "https://lukeponga-dev.github.io/NZ-Website/index.html",
        sourceUrl: "https://github.com/lukeponga-dev/NZ-Website/"
    },
    {
        img: require('../assets/images/doctors-appointments-screenshot.jpg'),
        title: "Doctors Appointments",
        description: "A full-stack application for managing doctor appointments...",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        liveUrl: "https://doctors-appointments-app.com",
        sourceUrl: "https://github.com/lukeponga-dev/Doctors-Appointments/"
    },
    {
        img: require('../assets/images/health-clinic-mvc-screenshot.jpg'),
        title: "Health Clinic MVC",
        description: "A health clinic management system built with ASP.NET MVC...",
        tags: ["ASP.NET", "C#", "SQL Server"],
        liveUrl: "https://health-clinic-mvc.com",
        sourceUrl: "https://github.com/lukeponga-dev/Health-Clinic-MVC/"
    },
    {
        img: require('../assets/images/cosmic.png'),
        title: "SPACE photo of the day web app",
        description: "Astronomy Picture of the Day web app. Displays daily space images and descriptions. Uses NASA API. Responsive design.",
        tags: ["React", "JavaScript", "API", "CSS", "Responsive", "Web Development"],
        liveUrl: "https://cosmicimages.netlify.app/",
        sourceUrl: "https://github.com/lukeponga-dev/cosmic-canvas"
    }
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