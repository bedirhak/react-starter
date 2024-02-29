import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/header.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
  
      <Container>
      <div className='dk-header-container'>
        <div className='dk-header-logo'>

        <Navbar.Brand href="#home">
          <div className='dk-header-logo'></div>
        </Navbar.Brand>
        </div>
        <div className='dk-header-nav'>
          
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto dk-header-nav-links">
            <Nav.Link href={`/anasayfa`}>Anasayfa</Nav.Link>

            <NavDropdown title="Kurumsal" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Hakkımızda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tarihçe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kalite</NavDropdown.Item>
              {/* <NavDropdown.Divider /> Linki ayırmak için line koyuyor*/}
              <NavDropdown.Item href="#action/3.4">Dış Pazar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Haberler</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ürünler" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mafsal İstafrozlar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Endüstriyel Kardan Milleri</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Traktör Yedek Parçaları</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sıcak & Soğuk Dövme</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href={`/kurumsal`}>Katalog ve Broşür</Nav.Link>
            
            <Nav.Link href={`/contact`}>İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </div>
      </Container>

    </Navbar>
  );
}

export default BasicExample;