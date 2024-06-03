import { Link } from 'react-router-dom';
import './styles.css';
import mot1 from 'assets/img/mot1.jpg';
import mot2 from 'assets/img/mot2.jpg';
import mot3 from 'assets/img/mot3.jpg';
import mot4 from 'assets/img/mot4.jpg';
import mot5 from 'assets/img/mot5.jpg';
import mot6 from 'assets/img/mot6.jpg';
import mot7 from 'assets/img/mot7.jpg';
import mot8 from 'assets/img/mot8.jpg';
import mot9 from 'assets/img/mot9.jpg';


function Pictures() {

  return (
    <div id="nkarner" className="carousel slide" data-ride="carousel">
      <h2>Նկարներ</h2>
      <div className="carousel-inner">
        {/* Image 1 */}
        <div className="carousel-item active">
          <img src={mot1} className="d-block w-100" alt="Image 1" />
        </div>

        {/* Image 2 */}
        <div className="carousel-item">
          <img src={mot2} className="d-block w-100" alt="Image 2" />
        </div>

        {/* Image 3 */}
        <div className="carousel-item">
          <img src={mot3} className="d-block w-100" alt="Image 3" />
        </div>

        {/* Image 4 */}
        <div className="carousel-item">
          <img src={mot4} className="d-block w-100" alt="Image 4" />
        </div>

        {/* Image 5 */}
        <div className="carousel-item">
          <img src={mot5} className="d-block w-100" alt="Image 5" />
        </div>

        {/* Image 6 */}
        <div className="carousel-item">
          <img src={mot6} className="d-block w-100" alt="Image 6" />
        </div>

        {/* Image 7 */}
        <div className="carousel-item">
          <img src={mot7} className="d-block w-100" alt="Image 7" />
        </div>

        {/* Image 8 */}
        <div className="carousel-item">
          <img src={mot8} className="d-block w-100" alt="Image 8" />
        </div>

        {/* Image 9 */}
        <div className="carousel-item">
          <img src={mot9} className="d-block w-100" alt="Image 9" />
        </div>
      </div>

      {/* Previous and Next buttons */}
      <a className="carousel-control-prev" href="#nkarner" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#nkarner" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <button className="butt">
        <Link to="/motivation">Վերադառնալ</Link>
      </button>
    </div>
  );

};

export default Pictures;
