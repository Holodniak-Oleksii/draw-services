import { IconFocusCentered } from "../../assets/icons";
import { Button, Select } from "../../ui-liberty";
import "./Header.scss";
const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>Services.</div>
      <div className='header__controls'>
        <Button>
          <IconFocusCentered />
        </Button>
        <Select />
      </div>
    </div>
  );
};

export default Header;
