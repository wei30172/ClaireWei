import './home.scss';
import { useState } from "react";
import { useQuery } from "react-query";
import useData from "../../Hooks/useData";
import useScroll from "../../Hooks/useScroll";
import About from "../../Components/About/About";
import WorkExperiences from "../../Components/WorkExperiences/WorkExperiences";
import ProjectList from "../../Components/ProjectList/ProjectList";
import CodingSkills from "../../Components/CodingSkills/CodingSkills";
import ScrollTopBtn from "../../Components/ScrollTopBtn/ScrollTopBtn";

const getProjects = async () =>
  await (await fetch('https://my-json-server.typicode.com/wei30172/project-list-json/projects')).json()

const Home = () => {
  const { data: projects, isPending, error } = useQuery('projects', getProjects)
  const { data } = useData()
  const { ref,  handleScrollTop } = useScroll(200)
  const [listType, setlistType] = useState('all')

  return (
    <div ref={ref} className="home">
      <ScrollTopBtn handleScrollTop={handleScrollTop}/>
      <div className="home-component">
        <About />
      </div>
      <div className="home-component">
        { data.skills && <CodingSkills skills={data.skills}/>}
      </div>
      <div className="home-component">
        { data.experiences && <WorkExperiences experiences={data.experiences} page="home"/>}
      </div>
      <div className="home-component">
        { error && <div>{error}</div> }
        { isPending && <div>Loading...</div> }
        {projects && <div>
          <button onClick={() => setlistType('all')}>All Projects</button>
          <button onClick={() => setlistType('react')}>React Projects</button>
        </div>}
        { projects && listType === 'all' && <ProjectList
          projects={projects}
          title="All Projects"
          page="home"
        />}
        { projects && listType === 'react' && <ProjectList
          projects={projects.filter(project => project.keywords.includes('React'))}
          title="React Projects"
          page="home"
        />}
      </div>
      
    </div>
  );
}
 
export default Home;