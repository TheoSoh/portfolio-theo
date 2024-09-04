import styles from './Header.module.css'

function Header() {

    return (
        <header>
            <nav className={styles.navbar}>
                <a href="#">Theo S.</a>
                <i className={`material-icons ${styles.menuBtn}`}>menu</i>
                <div className={styles.navContainer}>
                    <div className={styles.closeContainer}>
                        <i className={`material-icons ${styles.closeBtn}`}>close</i>
                    </div>
                    <ul className={styles.navList}>
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