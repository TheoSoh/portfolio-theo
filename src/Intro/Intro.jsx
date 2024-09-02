import styles from './Intro.module.css'
import profilePic from '../assets/ProfilePicTransparentBG.png'

function Intro() {

    return(
        <section className={styles.intro}>
            <div className={styles.intro-container}>
                <div className={styles.intro-text-container}>
                    <h1>Student in<br/>"Programme of<br/>Systems analysis"</h1>
                    <p className={styles.swe-subtitle}>(Systemvetenskapliga programmet)</p>
                    <p className={styles.intro-description}>Hello, I'm Theo Sohlman<br/>A software engineer with high ambitions</p>
                </div>
                <div className={styles.intro-img-container}>
                    <img class={styles.intro-img} src={profilePic} alt="Profile picture" oncontextmenu="return false"/>
                </div>
            </div>
        </section>
    );
}

export default Intro