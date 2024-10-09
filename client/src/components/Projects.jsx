/**
 * Author: Wenping Wang
 * File Name: Projects.jsx 
 * Date: 2024-09-30
 *  Student number: 301250155
 */

/**
 * Author: Wenping Wang
 * File Name: Projects.jsx
 * Date: 2024-09-30
 * Student number: 301250155
 */

/**
 * Projects Component
 * This component displays a list of projects showcasing skills in Building Automation 
 * and related technologies.
 */

import React from 'react';

/**
 * Project List
 * This section contains the list of projects that the author has worked on.
 */
const projectList = [
    "McMaster University, Omnia Innovation Center",
    "University of Toronto Scarborough Science Wing",
    "2185 Speakman Dr., Mississauga, Building Automation System",
    "1 St. Clair E, 1 St. Clair W, 90 Yong St., Toronto",
    "University of Toronto in Mississauga Library",
    "DoubleTree by Hilton Xiamen"
];

/**
 * Projects Component
 * The main function that renders the Projects component.
 */
export default function Projects() {
    return (
        <div style={{ padding: '20px', textAlign: 'left' }}>
            <h1>Projects</h1>
            <h3>
                Below are some of the projects I have worked on, showcasing my skills in 
                Building Automation and related technologies. Click on the project names for 
                more details.
            </h3>

            {/* Project List Section */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {projectList.map((project, index) => (
                    <li key={index} style={{ marginBottom: '10px', fontSize: '18px' }}>
                        <strong>* {project}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}







// export default function Projects() {
//     return (
//         <div style={{ padding: '20px', textAlign: 'left' }}>
//             <h1>Projects</h1>
//             <h3>
//                 Below are some of the projects I have worked on, showcasing my skills in 
//                 Building Automation and related technologies. Click on the project names for 
//                 more details.
//             </h3>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//                 <li style={{ marginBottom: '10px', fontSize: '18px' }}>
//                     <strong>* McMaster University, Omnia Innovation Center</strong>
//                 </li>
//                 <li style={{ marginBottom: '10px', fontSize: '18px' }}>
//                     <strong>* University of Toronto Scarborough Science Wing</strong>
//                 </li>
//                 <li style={{ marginBottom: '10px', fontSize: '18px' }}>
//                     <strong>* 2185 Speakman Dr., Mississauga, Building Automation System</strong>
                
//                 </li>
//                 <li style={{ marginBottom: '10px', fontSize: '18px' }}>
//                     <strong>* 1 St. Clair E, 1 St. Clair W, 90 Yong St., Toronto</strong>
                    
//                 </li>
//                 <li style={{ marginBottom: '10px', fontSize: '18px' }}>
//                     <strong>* University of Toronto in Mississauga Library</strong>
//                 </li>
//                 <li style={{ marginBottom: '10px', fontSize: '18px' }}>
//                     <strong>* DoubleTree by Hilton Xiamen</strong>
//                 </li>
//             </ul>
//         </div>
//     );
// }
