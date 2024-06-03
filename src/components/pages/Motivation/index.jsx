import './styles.css';
import { Link } from 'react-router-dom';

function Motivation() {

  return (
    <div id="motivacia">
      <h2>Մոտիվացիա</h2>
      <div className="button-container">
        <Link to='books' style={{ width: '33%', margin: '3%', }}>Գրքեր</Link>
        <Link to='sounds' style={{ width: '33%', margin: '3%', }}>Երգեր</Link>
        <Link to='yoga' style={{ width: '33%', margin: '3%', }}>Յոգա</Link>
        <Link to='pictures' style={{ width: '33%', margin: '3%', }}>նկարներ</Link>
      </div>
      <button className="button"><Link to="/">Վերադառնալ</Link></button>
    </div>
  )
}

export default Motivation;
