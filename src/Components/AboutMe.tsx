//! page that describes me and my skills
//! react, typescript, sequelize, express, nodejs, tailwind, mui, adobe cc
//* import FontAwesome icons
import { faJs, faReact, faDatabase, faNodeJs, faTailwind, faAdobe, faGitHub, faGitlab, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-header">
                <h1>About Me</h1>
            </div>
            <div className="about-me-body">
                <div className="about-me-text">
                    <p>
                        I am a full-stack web developer with a passion for creating beautiful and intuitive user interfaces.
                        I have a background in business and a passion for technology.
                        I am currently looking for a position in the software industry.
                    </p>
                </div>
                <div className="about-me-skills">
                    <div className="about-me-skill">
                        <h2>React</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>Typescript</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>Sequelize</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faDatabase} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>Express</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faServer} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>Node.js</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faNodeJs} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>Tailwind</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faTailwind} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>MUI</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faMui} />
                        </div>
                    </div>
                    <div className="about-me-skill">
                        <h2>Adobe CC</h2>
                        <div className="about-me-skill-icon">
                            <FontAwesomeIcon icon={faAdobe} />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}