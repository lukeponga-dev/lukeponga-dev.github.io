const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="text-center mb-4">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.</p>
                        <div className="contact-card">
                            <div className="row text-center">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <i className="bi bi-envelope-fill contact-icon"></i>
                                    <h5>Email</h5>
                                    <a href="mailto:lukeponga9@gmail.com">lukeponga9@gmail.com</a>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <i className="bi bi-linkedin contact-icon"></i>
                                    <h5>LinkedIn</h5>
                                    <a href="https://linkedin.com/in/lukeponga" target="_blank" rel="noopener noreferrer">linkedin.com/in/lukeponga</a>
                                </div>
                                <div className="col-md-4">
                                    <i className="bi bi-github contact-icon"></i>
                                    <h5>GitHub</h5>
                                    <a href="https://github.com/lukeponga-dev" target="_blank" rel="noopener noreferrer">github.com/lukeponga-dev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;