import { FunctionComponent } from "react";
import styles from "./Offers.module.css";
import Sidebar from "../components/Sidebar";
const Offers: FunctionComponent = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offersChild} />
      <div className={styles.text}>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges}>
              <span>{` `}</span>
              <span className={styles.badges1}>/ Badges</span>
            </span>
          </div>
        </div>
        <div className={styles.badges2}>Badges</div>
      </div>
      <div className={styles.text1}>
        <b className={styles.availableShj}>Available Shíjì</b>
        <div className={styles.breadcrumbitemprevious1}>
          <div className={styles.breadcrumb1}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges}>
              <span>{` `}</span>
              <span className={styles.badges1}>/ Badges</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.firstCard}>
        <img className={styles.backgroundIcon} alt="" src="/background10.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward}
            alt=""
            src="/ioniconaarrowforward1.svg"
          />
          <div className={styles.get500Stars}>Get 500 stars in Github</div>
          <b className={styles.githubMrpopular}>Github Mr.Popular</b>
        </div>
      </div>
      <div className={styles.firstCard1}>
        <img className={styles.backgroundIcon} alt="" src="/background11.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward}
            alt=""
            src="/ioniconaarrowforward1.svg"
          />
          <div className={styles.get500Stars}>Make 500 commit in github</div>
          <b className={styles.githubMrpopular}>Github TryHard</b>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
};

export default Offers;
