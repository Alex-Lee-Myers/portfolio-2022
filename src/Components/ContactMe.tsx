// contact page containing links to my LinkedIn, GitHub, Twitter, Gmail, and Indeed
// contact me page
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faGmail, faIndeed } from '@fortawesome/free-brands-svg-icons';


const ContactMe = () => {
    return (
        <div className="contact-me-container">
            <div className="contact-me-header">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-me-body">
                <div className="contact-me-links">
                    <div className="contact-me-link">
                        <a href="https://www.linkedin.com/in/joseph-c-b-a8b8b8b8/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className="contact-me-link">
                        <a href="
        
                        ">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className="contact-me-link">
                        <a href="https://twitter.com/josephcba">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                    <div className="contact-me-link">
                        <a href="mailto:

                        ">
                            <FontAwesomeIcon icon={faGmail} />  
                        </a>
                    </div>
                    <div className="contact-me-link">
                    
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;