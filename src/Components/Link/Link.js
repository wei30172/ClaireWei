import './Link.scss'

const Link = () => {
  return (
    <div className="link">
      <a href="https://wei30172.github.io/assets/documents/SiaoPing,%20WEI%20Resume-2022-01.pdf"
        target="_blank" rel="noopener noreferrer">
        <button>Vitae</button>
      </a>
      <a href="https://www.linkedin.com/in/siao-ping-wei-b84b35207/"
        target="_blank" rel="noopener noreferrer">
        <button className="linkedin">LinkedIn</button>
      </a>
      <a href="https://github.com/wei30172"
        target="_blank" rel="noopener noreferrer">
        <button className="github">Github</button>
      </a>
    </div>
  );
}
 
export default Link;