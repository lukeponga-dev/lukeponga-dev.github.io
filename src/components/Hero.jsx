import HeroImg from '../assets/images/heroimg.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container text-center text-lg-start">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h5 className="hero-intro">Hello, I'm</h5>
                        <h1 className="hero-title">Luke Ponga</h1>
                        <h2 className="hero-subtitle">Software Developer</h2>
                        <p className="hero-description">A passionate developer from Hamilton, NZ, specializing in IoT and AI solutions...</p>
                        <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-outline-secondary">Contact Me</a>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center d-none d-lg-block">
                        <div className="hero-img-container">
                            <img src={HeroImg} alt="Luke Ponga" className="img-fluid rounded-circle hero-profile-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;