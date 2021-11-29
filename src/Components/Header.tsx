import * as React from 'react';
import { Container , Navbar, NavbarBrand} from 'react-bootstrap';

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
     <Navbar fixed="top" bg="dark" variant="dark">
       <Container>
          <NavbarBrand>
            React TypeScript Bootstrap Tutorial
          </NavbarBrand>
       </Container>
     </Navbar>
  )
};

export default Header;


