import './styles.css';
import { Link } from 'react-router-dom';

function Yoga() {

  return (
    <div>
      <div id="yogaclasses">
        <h2>Յոգա</h2>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 1</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C1pm0g2mSlE?si=baCLdAVBbrskozEF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 2</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ciRXwihVp6M?si=cH8rN1JYK5EumW4q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 3</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7uMc-FycuD8?si=3S_kwBdXRR6L5cDV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 4</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HVdBjbfPvBM?si=nfTRwzl1zG6S35e-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 5</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dj_bYKVDgx0?si=wDqgzStsvBQMNH1R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 6</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4pw-fnUz5Lw?si=QKO3S0AEwsQq3GLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 7</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/f0nIL2T0u8g?si=Q5qK7DJmSHTPRM0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Դաս 8</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ICgp3o0PIQ?si=MVLRskiyLqfbk4CJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <button class="butt"><Link to="/motivation">Վերադառնալ</Link></button>
      </div>
    </div>
  )
}

export default Yoga;
