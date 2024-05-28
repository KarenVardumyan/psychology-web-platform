import './styles.css';
import { Link } from 'react-router-dom';

function Motivation() {

  return (
    <div id="motivacia">
      <h2>Մոտիվացիա</h2>
      <div className="button-container">
        <a href="./grqer.html" style={{ width: '33%', margin: '3%', }}>Գրքեր</a>
        <Link to='sounds' style={{ width: '33%', margin: '3%', }}>Երգեր</Link>
        <Link to='yoga' style={{ width: '33%', margin: '3%', }}>Յոգա</Link>
        <a href="./nkarner.html" style={{ width: '33%', margin: '3%', }}>նկարներ</a>
      </div>
      <button className="button"><Link to="/">Վերադառնալ</Link></button>
    </div>
  )
}

export default Motivation;
