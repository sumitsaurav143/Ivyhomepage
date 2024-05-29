
import './App.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <div className='Icon'>
          <div>
            <img src={logo}></img>
          </div>
          <div className='IconSlogan'>
            <p>Shaping the future of game~bling!</p>
          </div>

        </div>
        <Nav justify variant="tabs" defaultActiveKey="/home" className='NavItemsMain'>
          <Nav.Item>
            <Nav.Link href="/home" className='NavItems'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className='NavItems'>About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className='NavItems'>Life@IVY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" className='NavItems'>Career</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" className='NavItems'> Contact Us</Nav.Link>
          </Nav.Item>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} className='NavItems'>Login</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Admin Login</Dropdown.Item>
              <Dropdown.Item>Employee Login</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>

      <div className='bodyMain'>
        <div className='left'>
          <h1 className='slgn'><span className='slgnivy'>I</span>mmersive</h1>
          <h1 className='slgn'>Inno<span className='slgnivy'>V</span>ative</h1>
          <h1 className='slgn'>Technolog<span className='slgnivy'>Y</span></h1>
        </div>
        <div className='right'>
          <Carousel data-bs-theme="dark" className='imagecrsl'>
            <Carousel.Item>
              <img
                className="d-block w-100 h-200"
                src="https://ivy.global/wp-content/uploads/2022/02/hero-banner-slide-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ivy.global/wp-content/uploads/2023/02/hero-img2-new-scaled-1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ivy.global/wp-content/uploads/2022/02/hero-banner-slide-3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className='bodyMain2'>
        <div className='left'>
          <img src="https://www.netmatico.com/service/web-development/1st.png"></img>
        </div>
        <div className='right'>
          <h1 className='slgn'>Transforming Play with</h1>
          <h1 className='slgn'>Technological Breakthroughs.</h1>
        </div>
      </div>

      <div className='bodyMain21'>
        <div className='left'>
          Want to join our team?
        </div>
        <div className='right'>
                <button>Contact Us</button>
        </div>
      </div>

      <div className='bodyMain3'>
        <div className='left'>
          <h1 className='slgn'>Our Clients</h1>
        </div>
        <div className='right'>

          <Figure className='rtImg'>
            <Figure.Image
              width={171}
              height={160}
              alt="150x180"
              src="https://th.bing.com/th/id/OIP.OQD05a1IAd6YccKjIiSnHwAAAA?w=418&h=447&rs=1&pid=ImgDetMain"
            />
            <Figure.Caption>
             BETMGM
            </Figure.Caption>
          </Figure>

          <Figure className='rtImg'>
            <Figure.Image
              width={171}
              height={160}
              alt="150x180"
              src="https://th.bing.com/th/id/R.cea9e9918b6aead7f693fdf7afed83ed?rik=Uyzd4khRabC03Q&pid=ImgRaw&r=0"
            />
            <Figure.Caption>
             GALA BINGO
            </Figure.Caption>
          </Figure>

          <Figure className='rtImg'>
            <Figure.Image
              width={171}
              height={160}
              alt="150x180"
              src="https://th.bing.com/th/id/OIP.c7xhNYIG75XRbIIWdm1S7AAAAA?rs=1&pid=ImgDetMain"
            />
            <Figure.Caption>
             LADBROKES
            </Figure.Caption>
          </Figure>

          <Figure className='rtImg'>
            <Figure.Image
              width={171}
              height={160}
              alt="150x180"
              src="https://yt3.ggpht.com/a-/AAuE7mAHhLrDuWYc62dnAa8RQL15-zddUdSFDXClKQ=s900-mo-c-c0xffffffff-rj-k-no"
            />
            <Figure.Caption>
             CORAL
            </Figure.Caption>
          </Figure>

          <Figure className='rtImg'>
            <Figure.Image
              width={171}
              height={160}
              alt="150x180"
              src="https://www.findbettingsites.co.uk/wp-content/uploads/2019/09/sportingbet-2.png"
            />
            <Figure.Caption>
             SPORTINGBET
            </Figure.Caption>
          </Figure>

        </div>
      </div>


      <div className='footer'>
      <div className='Icon'>
          <div>
            <img src={logo} className='fimg'></img>
          </div>
          <div className='IconSlogan'>
            <p>Copyright © Ivy Comptech Pvt Ltd. 2022 – All rights reserved</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
