import './styles.css';

import psy1 from 'assets/img/psy1.jpg';
import psy2 from 'assets/img/psy2.jpg';
import psy3 from 'assets/img/psy3.jpg';
import psy4 from 'assets/img/psy4.jpg';
import psy5 from 'assets/img/psy5.jpg';
import psy6 from 'assets/img/psy6.jpg';
import psy7 from 'assets/img/psy7.jpg';
import logoImg from 'assets/img/logo.png';
import phoneImage from 'assets/img/phone.jpg';
import location from 'assets/img/location.jpg';
import homephoto from 'assets/img/homephoto.png';
import aboutphoto from 'assets/img/aboutphoto.jpg';
import contactphoto from 'assets/img/contactphoto.jpg';
import insta from 'assets/img/insta.jpg';
import facebook from 'assets/img/facebook.jpg';
import whatsapp from 'assets/img/whatsapp.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <body>

      <header className="topheader">
        <div className="left-content">
          <div className="location-logo">
            <img src={location} alt="Location Logo" />
            <span style={{ fontSize: '2vh' }}>ՀՀ, ք․ Վանաձոր</span>
          </div>
        </div>

        <div className="right-content">
          <div className="telephone-number">
            <img src={phoneImage} alt="Telephone Logo" />
            <span style={{ fontSize: '2vh' }}>+37499999999</span>
          </div>
          <div className="social-icons">
            <img src={insta} alt="Instagram Logo" />
            <img src={facebook} alt="Facebook Logo"></img>
            <img src={whatsapp} alt="WhatsApp Logo"></img>
          </div>
        </div>
      </header>

      <header className="header-nav">
        <div className="logoo">
          <img className="logoo-img" src={logoImg} alt="Your Logo" />
        </div>

        <nav >
          <ul className="nav-linkss"  >
            <li><a href="#" style={{ color: 'black' }}>Գլխավոր</a></li>
            <li><a href="#masin" style={{ color: 'black' }}>Մեր մասին</a></li>
            <li><a href="#kap" style={{ color: 'black' }}>Կապ</a></li>
            <li><a href="#carayutyun" style={{ color: 'black' }}>Մեր ծառայությունները</a></li>
          </ul>
        </nav>
      </header>


      <div className="content">
        <div>
          <div className="home">

            <div className="leftt-div">
              <h1 id="glxavor">CalmMind</h1>
            </div>

            <div className="right-div">
              <img src={homephoto} alt="Big Picture" className="big-picture" />
            </div>
          </div>
          {/* <!-- about --> */}
          <div className="about" >
            <div className="picture">
              <img src={aboutphoto} alt="About Picture" style={{ height: '95%' }} />
            </div>
            <div className="about-content">
              <h2 id="masin" style={{ paddingBottom: '5%' }}>Մեր մասին</h2>
              <p>Բարի գալուստ CalmMind, որտեղ սկսվում է ներքին խաղաղության և անձնական աճի ուղին ...</p>
              <button> <a href="./index1.html" style={{ fontSize: '3vh' }}>Իմանալ ավելին</a></button>
            </div>
          </div>



          {/* <!-- contact --> */}

          <div id="contact-uss">
            <h2 id="kap" style={{ transition: 'transform 0.3s ease', boxShadow: '0.3s ease' }}>Կապ</h2>
            <img src={contactphoto} alt="Contact Us" style={{ width: '35%' }} />
            <div className="container">
              <div className="row" style={{ marginLeft: '5%' }}>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Հեռախոս։</h4>
                      <p className="card-text" style={{ fontSize: '2.5vh' }}>+374 99 999 999</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Mail:</h4>
                      <p className="card-text" style={{ fontSize: '2.5vh' }}>calmmind@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Գտնվում Է։</h4>
                      <p className="card-text" style={{ fontSize: '2.5vh' }}>ՀՀ, Վանաձոր</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <!-- doctors --> */}
          <div id="ourDoctors">
            <div className="container">
              <h2 className="text-center my-4" style={{ color: 'white' }}>Մեր հոգեբանները</h2>
              <div id="doctorCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {/* <!-- Doctor 1 --> */}
                  <div className="carousel-item active">
                    <img src={psy1} className="doctor-img" alt="Doctor 1" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}> Սոնա Սարգսյան </h3>
                      {/* <!-- <p style="color: darkgray; ">Profession: General Practitioner</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 123-456-7890</p>
                    </div>
                  </div>
                  {/* <!-- Doctor 2 --> */}
                  <div className="carousel-item">
                    <img src={psy2} className="doctor-img" alt="Doctor 2" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}>Դավիթ Պողոսյան</h3>
                      {/* <!-- <p style="color: darkgray; ">Profession: Cardiologist</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 987-654-3210</p>
                    </div>
                  </div>
                  {/* <!-- Add more doctors as needed --> */}
                  <div className="carousel-item">
                    <img src={psy3} className="doctor-img" alt="Doctor 2" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}>Հասմիկ Կարապետյան</h3>
                      {/* <!-- <p style="color: darkgray; ">Profession: Cardiologist</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 327-654-3210</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={psy4} className="doctor-img" alt="Doctor 2" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}>Համլետ Հարությունյան</h3>
                      {/* <!-- <p style="color: darkgray; ">Profession: Cardiologist</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 874-654-3210</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={psy5} className="doctor-img" alt="Doctor 2" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}>Մոնթե Գալստյան</h3>
                      {/* <!-- <p style="color: darkgray; ">Profession: Cardiologist</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 963-654-3210</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={psy6} className="doctor-img" alt="Doctor 2" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}>Միլենա Դանիելյան</h3>
                      {/* <!-- <p>Profession: Cardiologist</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 321-654-3210</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={psy7} className="doctor-img" alt="Doctor 2" />
                    <div className="carousel-caption">
                      <h3 style={{ color: 'darkgray' }}>Ռուզաննա Մարիկյան</h3>
                      {/* <!-- <p style="color: darkgray; ">Profession: Cardiologist</p> --> */}
                      <p style={{ color: 'darkgray' }}>Հեռ: 987-654-3210</p>
                    </div>
                  </div>


                </div>
                <a className="carousel-control-prev" href="#doctorCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#doctorCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- service --> */}

          <div id="threeServices">
            <h2 id="carayutyun">Մեր ծառայությունները</h2>
            <Link to='tests' target="_blank" className="service-button" >Հոգեբանական թեստեր</Link>
            <Link to='motivation' className="service-button" >Մոտիվացիա</Link>
            <a href="./chat/index.html" target="_blank" className="service-button">Չաթ հոգեբանի հետ</a>

          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: 'pink', padding: '20px' }}>
        <div style={{ textAlign: 'center', color: 'white', fontSize: '2.5vh' }}>
          <img src={logoImg} alt="Your Logo" style={{ height: '50px', width: 'auto', marginBottom: '10px' }} />
          <p>Կապ:</p>
          <div style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Facebook</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Instagram</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>WhatsApp</a>
          </div>
          {/* <!-- <p style="margin-bottom: 5px;">Կապ:</p> --> */}
          <p style={{ marginBottom: '5px' }}>Email: calmmind@gmail.com</p>
          <p style={{ marginBottom: '5px' }}>Հեռ: +1 (123) 456-7890</p>
        </div>
        <div style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
          <p>&copy; 2024 CalmMind. All rights reserved.</p>
        </div>
      </footer>
    </body>
  );
}

export default Home;
