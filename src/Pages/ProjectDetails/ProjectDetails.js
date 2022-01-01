import './project-detail.scss';
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";

const ProjectDetails = () => {
  const { id } = useParams()
  const url = 'https://my-json-server.typicode.com/wei30172/project-list-json/projects'
  const { data: project, isPending, error } = useFetch(`${url}/${id}`)

  return (
    <div className="project-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { project && (
        <article>
          <h2>{ project.title }</h2>
          <p>{ project.keywords && project.keywords.map((keyword, index) =>(
            <span key={index}>#{ keyword }</span>
          )) }</p>
          <p><a href={ project.link } target="_blank" rel="noopener noreferrer">
            <span>{ project.link }</span>
          </a></p>
          <div>{ project.description }</div>
          <div className="project-images">{ project.images && project.images.map((img, index) =>(
            <img key={index} src={require(`../../assets/img/projects/${img}.png`).default} alt="img"/>
          )) }</div>
        </article>
      )}
    </div>
    
  );
}
 
export default ProjectDetails;