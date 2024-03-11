// import { TbClockHour7 } from "react-icons/tb";
// import { RxClock } from "react-icons/rx";
// import { MdAlternateEmail } from "react-icons/md";
import styles from "./styles/NavStyle.module.css";
export default function NavBarre() {

  return (
    <div>
      <header className={styles.head}>
        <div>
          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Services</a>
            <a href="#">FAQ</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
