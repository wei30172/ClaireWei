import "./project-detail.scss";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";

const ProjectDetails = () => {
  const { id } = useParams();
  const url =
    "https://my-json-server.typicode.com/wei30172/project-list-json/projects";
  const { data: project, isPending, error } = useFetch(`${url}/${id}`);

  return (
    <div className="project-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <section className="title">
            <h2>{project.title}</h2>
          </section>
          <section className="keywords">
            {project.keywords &&
              project.keywords.map((keyword, index) => (
                <span key={index}>#{keyword}</span>
              ))}
          </section>
          <section className="buttons">
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              <button className="code">CODE</button>
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="code">LINK</button>
            </a>
          </section>
          <section>{project.description}</section>
          <section className="project-images">
            {project.images &&
              project.images.map((img, index) => (
                <img
                  key={index}
                  src={require(`../../assets/img/projects/${img}.png`).default}
                  alt="img"
                />
              ))}
          </section>
        </article>
      )}
    </div>
  );
};

export default ProjectDetails;
