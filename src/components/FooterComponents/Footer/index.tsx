import "./styles.scss";
import logo from "../../../assets/header/logo-castgroup.png";
import { ItemsFooter } from "../ItemsFooter";


export function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <div className="line"></div>
        <div className="content-footer">
          <div className="container-logo">
            <img src={logo} alt="Logo Cast Group" className="logo" />
            <p className="description-logo">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis repellendus deserunt tempore minus quia alias animi
              inventore, quod doloremque dolores!
            </p>
          </div>
          <div className="content-listFooter">
            <ItemsFooter />
          </div>
        </div>
      </footer>
      <div className="copyright-container">
        <p className="items-copyright">©CastGroup All Rights Reserved.</p>
        <p className="items-copyright">Designed with ❤️ by my mind</p>
      </div>
    </>
  );
}
