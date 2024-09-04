import styles from './Intro.module.css'
import profilePic from '../assets/ProfilePicTransparentBG.png'

function Intro() {

    return(
        <section className={styles.intro}>
            <div className={styles.introContainer}>
                <div className={styles.introTextContainer}>
                    <h1>Student in<br/>"Programme of<br/>Systems analysis"</h1>
                    <p className={styles.sweSubtitle}>(Systemvetenskapliga programmet)</p>
                    <p className={styles.introDescription}>Hello, I'm Theo Sohlman<br/>A software engineer with high ambitions</p>
                </div>
                <div className={styles.introImgContainer}>
                    <img className={styles.introImg} src={profilePic} alt="Profile picture"/>
                </div>
            </div>
        </section>
    );
}

export default Intro