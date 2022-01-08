import ProjectList from "../../Components/ProjectList/ProjectList";
import useData from "../../Hooks/useData";

const Projects = () => {
  const { data } = useData()
  
  return (
    <div className="work">
      { data.projects && <ProjectList projects={data.projects} title="My Side Projects" page="project"/>}
    </div>
  );
}
 
export default Projects;