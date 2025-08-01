const Skills = () => {
    return (
        <section id="skills" className="section-padding section-bg">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="skill-card">
                            <div className="skill-icon"><i className="bi bi-code-slash"></i></div>
                            <h3 className="skill-card-title">Development</h3>
                            <ul className="list-unstyled">
                                <li>C# & .NET Framework</li>
                                <li>Java & Spring Boot</li>
                                <li>Python & TensorFlow</li>
                                <li>JavaScript/TypeScript</li>
                                <li>Generative AI</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="skill-card">
                            <div className="skill-icon"><i className="bi bi-cpu"></i></div>
                            <h3 className="skill-card-title">Technical</h3>
                            <ul className="list-unstyled">
                                <li>IoT System Design</li>
                                <li>Cloud Infrastructure (AWS)</li>
                                <li>API Development</li>
                                <li>Database Management</li>
                                <li>Data Analysis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="skill-card">
                            <div className="skill-icon"><i className="bi bi-people"></i></div>
                            <h3 className="skill-card-title">Soft Skills</h3>
                            <ul className="list-unstyled">
                                <li>Problem Solving</li>
                                <li>Logical Reasoning</li>
                                <li>Time Management</li>
                                <li>Project Organization</li>
                                <li>Detail Oriented</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;