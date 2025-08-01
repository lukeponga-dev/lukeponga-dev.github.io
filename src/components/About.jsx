import AboutImg from '../assets/images/heroimg.png'; // Assuming the image is in assets

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="about-img">
                            <img src={AboutImg} alt="Luke Ponga" className="img-fluid rounded shadow-lg" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-content">
                            <h3>Software Developer from Hamilton, New Zealand</h3>
                            <p>I'm a passionate software developer with expertise in building scalable applications, IoT
                                systems, and AI solutions. With a strong foundation from my diplomas and hands-on
                                experience, I focus on creating efficient and innovative software.</p>
                            <p>My interests center around Internet of Things (IoT) ecosystems and Artificial Intelligence. I
                                have recently expanded my expertise through certification in Generative AI and continue to
                                explore new technologies to solve complex problems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;