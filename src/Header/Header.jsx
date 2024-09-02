import styles from './Header.module.css'

function Header() {

    return (
        <header>
            <nav className={styles.navbar}>
                <a href="#">Theo S.</a>
                <i className={styles.material-icons}>menu</i>
                <div className="nav-container">
                    <div className="close-container">
                        <i className="material-icons, closeBtn">close</i>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <a href="#">Intro</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Courses</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header