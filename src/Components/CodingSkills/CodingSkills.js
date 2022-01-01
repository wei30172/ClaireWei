import './coding-skills.scss'

const CodingSkills = ({skills}) => {
  return (
    <div className="coding-skills">
      <h2>Coding Skills</h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <h4>{ skill.title }</h4>
            { skill.score === 5 && <p>●●●●●</p>}
            { skill.score === 4 && <p>●●●●○</p>}
            { skill.score === 3 && <p>●●●○○</p>}
            { skill.score === 2 && <p>●●○○○</p>}
            { skill.score === 1 && <p>●○○○○</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default CodingSkills;