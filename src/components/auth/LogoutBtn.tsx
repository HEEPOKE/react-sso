import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoutBtn() {
  const logoutSubmit = () => {
    // logoutSwal.logoutHandle();
  };

  return (
    <>
      <NavDropdown.Item onClick={logoutSubmit}>
        <FontAwesomeIcon
          icon={["fas", "right-from-bracket"]}
          className="mx-2"
        />
        Logout
      </NavDropdown.Item>
    </>
  );
}