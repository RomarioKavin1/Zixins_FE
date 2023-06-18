import { FunctionComponent } from "react";
import styles from "./Badges.module.css";
import Sidebar from "../components/Sidebar";
import Zixins from "../components/Zixins";
const Badges: FunctionComponent = () => {

  const google=()=>{
    window.open("http://localhost:5000/auth/google","newwindow","width=600,height=600")
  }
  return (
    <div className={styles.badges}>
      <div className={styles.badgesChild} />
      <div className={styles.text}>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges1}>
              <span>{` `}</span>
              <span className={styles.badges2}>/ Badges</span>
            </span>
          </div>
        </div>
        <div className={styles.badges3}>Badges</div>
      </div>
      <div className={styles.text1}>
        <b className={styles.availableZxns}>Available Zìxìns</b>
        <div className={styles.breadcrumbitemprevious1}>
          <div className={styles.breadcrumb1}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges1}>
              <span>{` `}</span>
              <span className={styles.badges2}>/ Badges</span>
            </span>
          </div>
        </div>
      </div>
      {/* <div className={styles.firstCard}>
        <Zixins name="twitter" description="Twitter Auth Badge" imgsrc="/background.svg"/>
      </div>
      <div className={styles.firstCard1}>
        <Zixins name="Instagram" description="Instagram Auth Badge" imgsrc="/background1.svg"/>
      </div>
      <div className={styles.firstCard2}>
        <Zixins name="linkedin" description="Linkedin Auth Badge" imgsrc="/background2.svg"/>
      </div> */}
      <div className={styles.firstCard3}>
        <Zixins name="Google" description="Google Auth Badge" imgsrc="/background3@2x.png" click={google}/>
      </div>
      {/* <div className={styles.firstCard4}>
        <Zixins name="Github" description="Github Auth Badge" imgsrc="/background4.svg"/>
      </div>
      <div className={styles.firstCard5}>
        <Zixins name="Facebook" description="Facebook Auth Badge" imgsrc="/background5.svg"/>
      </div> */}
      <Sidebar/>
    </div>
  );
};

export default Badges;
