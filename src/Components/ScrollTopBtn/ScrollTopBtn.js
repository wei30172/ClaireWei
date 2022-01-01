import './scrolltop-btn.scss'

const ScrollTopBtn = ({ handleScrollTop }) => {
  return (
    <div className="scrolltop-container">
      <div className="scrolltop-btn" onClick={handleScrollTop}>
        <div className="scrolltop-icon"><i className="arrow-up"></i></div>
      </div>
    </div>
  );
}
 
export default ScrollTopBtn;