/**
 * Author: Wenping Wang
 * File Name: About.jsx 
 * Date: 2024-09-30
 *  Student number: 301250155
 */

import benjamin from '../assets/benjamin.jpg';
import resume from '../assets/benjaminresume.pdf';

export default function About() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Wenping Wang</h1>
            <img 
                src={benjamin}
                alt="Wenping Wang" 
                style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '20px' }} 
            />
            <p>
                I am a Senior Building Automation Professional with a passion for designing 
                intelligent and efficient building environments. With expertise in Building 
                Automation System Design and integration, I am dedicated to creating sustainable 
                solutions that enhance operational efficiency. I have a strong background in programming 
                and a post-graduation specialization in Artificial Intelligence Design and Implementation. 
                I am eager to collaborate with forward-thinking organizations to drive innovation 
                in building automation systems.
            </p>

            <p>
            <a 
                    href={resume}
                    download 
                    style={{ textDecoration: 'none', color: '#007BFF' }}
                >
                    Download my Resume (PDF)
                </a>
            </p>
        </div>
    );
}
