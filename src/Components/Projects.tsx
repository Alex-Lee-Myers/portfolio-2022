// contains the Projects component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-body">
                <div className="projects-project">
                    <div className="projects-project-header">
                        <h2>Project 1</h2>
                    </div>
                    <div className="projects-project-body">
                        <div className="projects-project-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris euismod, nunc eget euismod consectetur, nunc nisi
                            </p>
                        </div>
                        <div className="projects-project-links">
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faGmail} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-project">
                    <div className="projects-project-header">
                        <h2>Project 2</h2>
                    </div>
                    <div className="projects-project-body">
                        <div className="projects-project-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris euismod, nunc eget euismod consectetur, nunc nisi
                            </p>
                        </div>
                        <div className="projects-project-links">
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <div className="projects-project-link">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
    )
}
