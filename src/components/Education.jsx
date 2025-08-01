import GenAICert from '../assets/certificates/certificate.png';
import MicrosoftCert from '../assets/certificates/microsoftbuildnaturallangcert.png';

const Education = () => {
    return (
        <section id="education" className="section-padding section-bg">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <h2 className="section-title mb-4 text-start">Education</h2>
                        <div className="timeline">
                            <div className="timeline-item">
                                <h6>Level 6 Diploma in Software Development</h6>
                                <p className="text-muted mb-0">Vision College, Hamilton | 2020 - 2021</p>
                            </div>
                            <div className="timeline-item">
                                <h6>Level 5 Diploma in Web Development & Design</h6>
                                <p className="text-muted mb-0">Vision College, Hamilton | 2019 - 2021</p>
                            </div>
                            <div className="timeline-item">
                                <h6>Level 3 Cert. in Business Admin & Technology</h6>
                                <p className="text-muted mb-0">Vision College, Hamilton | 2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="section-title mb-4 text-start">Certificates</h2>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="certificate-card d-flex align-items-center">
                                    <img src={GenAICert} alt="Generative AI Certificate" className="certificate-img" />
                                    <div className="certificate-body">
                                        <h5 className="certificate-title">Generative AI in 2025</h5>
                                        <p className="certificate-issuer">Issued by CodeSignal</p>
                                        <a href="https://codesignal.com/learn/certificates/cmcoct0jf000gla04cr345pg6/courses/883"
                                            target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">View Certificate</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="certificate-card d-flex align-items-center">
                                    <img src={MicrosoftCert} alt="Microsoft Build Natural Language Certificate" className="certificate-img" />
                                    <div className="certificate-body">
                                        <h5 className="certificate-title">Microsoft Build: Natural Language AI</h5>
                                        <p className="certificate-issuer">Issued by Microsoft</p>
                                        <a href="certificates/microsoftbuildnaturallangcert.png" target="_blank"
                                            rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">View Certificate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;