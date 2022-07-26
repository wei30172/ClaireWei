import "./Link.scss";

const Link = () => {
  return (
    <div className="link">
      <a
        href="https://wei30172.github.io/assets/documents/SiaoPing,%20Wei%20Resume-2022-08.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Vitae</button>
      </a>
      <a
        href="https://www.linkedin.com/in/siaoping-wei/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="linkedin">LinkedIn</button>
      </a>
      <a
        href="https://github.com/wei30172"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="github">Github</button>
      </a>
    </div>
  );
};

export default Link;
