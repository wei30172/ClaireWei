import './project-list.scss'
import { Link } from "react-router-dom";

const ProjectList = ({ projects, title, page }) => {
  return (
    <div className="project-list">
      <h2>{title}</h2>
      {projects.map((project, index) => (
        <div className="project-container" key={index}>
          <Link to={`/detail/${project.id}`}>
            <div className='project-content'>
              <img src={require(`../../assets/img/projects/${project.images[0]}.png`).default} alt="img"/>
              <div>
                <h4>{ project.title }</h4><span>{ project.time }</span>
                <p>{ page === 'home' && project.keywords.map((keyword, index) =>(
                  <span key={index}>#{ keyword } </span>
                )) }</p>
                <div className='project-description'>{ page === 'project' && project.description }</div>
              </div> 
            </div>

          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProjectList;