import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const TopNavBar = () => {
  return (
    <div>
      <Navbar color="dark" dark light container="md">
        <Nav>
          <NavbarBrand href="/">yarden-nabavian</NavbarBrand>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink style={{ color: "white" }} href="/about">
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} href="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} href="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
