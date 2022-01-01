import './work-experiences.scss'

const WorkExperiences = ({ experiences, page }) => {
  return (
    <div className="work-experiences">
      <h2>Work Experiences</h2>
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <h4>{ experience.title }<span> | { experience.time }</span></h4>
            <h4>{ experience.company }<span> | { experience.location }</span></h4>
            <p className="experience-description">{ experience.description }</p>
            <div>{ page === 'work' && experience.contents.map((item, index) =>(
              <p className="experience-contents" key={index}>
                <span>{index + 1}.</span>{ item }
              </p>
            )) }</div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default WorkExperiences;