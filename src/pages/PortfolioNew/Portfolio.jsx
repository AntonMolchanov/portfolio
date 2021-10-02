import React from 'react';
import db from './../../DB/db'
import ProjectItem from "./ProjectItem/ProjectItem";

function PortfolioNew(props) {
    const list = db.map(project => <ProjectItem project={project}/>)
    return (
        <div>
            {list}
        </div>
    );
}

export default PortfolioNew;