import WorkExperiences from "../../Components/WorkExperiences/WorkExperiences";
import useData from "../../Hooks/useData";

const Work = () => {
  const { data } = useData();

  return (
    <div className="work">
      {data.experiences && (
        <WorkExperiences experiences={data.experiences} page="work" />
      )}
    </div>
  );
};

export default Work;
