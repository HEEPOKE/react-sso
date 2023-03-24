import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoutBtn from "../auth/LogoutBtn";

export default function RightMenu() {
  const access_token = sessionStorage.getItem("access_token");

  if (access_token != null) {
    return (
      <>
        <NavDropdown title="Nav" id="nav-dropdown" menuVariant="dark">
          <LinkContainer to="#">
            <NavDropdown.Item>
              <FontAwesomeIcon icon={["fas", "user"]} className="mx-2" />
              Profile
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item>Another action</NavDropdown.Item>
          <NavDropdown.Item>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <LogoutBtn />
        </NavDropdown>
      </>
    );
  } else {
    return (
      <>
        <LinkContainer to="/auth/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/auth/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </>
    );
  }
}
