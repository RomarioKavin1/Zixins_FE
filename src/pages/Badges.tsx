import { FunctionComponent } from "react";
import styles from "./Badges.module.css";
import Sidebar from "../components/Sidebar";
const Badges: FunctionComponent = () => {
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
      <div className={styles.firstCard}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward}
            alt=""
            src="/ioniconaarrowforward.svg"
          />
          <div className={styles.authenticateWithTwitterContainer}>
            <p
              className={styles.authenticateWithTwitter}
            >{`Authenticate With twitter to `}</p>
            <p className={styles.authenticateWithTwitter}>earn badge</p>
          </div>
          <b className={styles.twitterAuthBadge}>Twitter Auth Badge</b>
        </div>
      </div>
      <div className={styles.firstCard1}>
        <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text3}>
          <img
            className={styles.ioniconaarrowforward1}
            alt=""
            src="/ioniconaarrowforward.svg"
          />
          <div className={styles.authenticateWithGoogleContainer}>
            <p
              className={styles.authenticateWithTwitter}
            >{`Authenticate With Google `}</p>
            <p className={styles.authenticateWithTwitter}>to earn badge</p>
          </div>
          <b className={styles.instagramAuthBadge}>Instagram Auth Badge</b>
        </div>
      </div>
      <div className={styles.firstCard2}>
        <img className={styles.backgroundIcon} alt="" src="/background2.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text4}>
          <img
            className={styles.ioniconaarrowforward2}
            alt=""
            src="/ioniconaarrowforward1.svg"
          />
          <div className={styles.authenticateWithGoogleContainer}>
            Authenticate With linkedin to earn badge
          </div>
          <b className={styles.linkedinAuthBadge}>Linkedin Auth Badge</b>
        </div>
      </div>
      <div className={styles.firstCard3}>
        <img
          className={styles.backgroundIcon3}
          alt=""
          src="/background3@2x.png"
        />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward3}
            alt=""
            src="/ioniconaarrowforward1.svg"
          />
          <div className={styles.authenticateWithTwitterContainer}>
            <p className={styles.authenticateWithTwitter}>
              Authenticate With Google
            </p>
            <p className={styles.authenticateWithTwitter}> to earn badge</p>
          </div>
          <b className={styles.twitterAuthBadge}>Google Auth Badge</b>
        </div>
      </div>
      <div className={styles.firstCard4}>
        <img className={styles.backgroundIcon} alt="" src="/background4.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward4}
            alt=""
            src="/ioniconaarrowforward1.svg"
          />
          <div className={styles.authenticateWithTwitterContainer}>
            <p
              className={styles.authenticateWithTwitter}
            >{`Authenticate With Google to `}</p>
            <p className={styles.authenticateWithTwitter}>earn badge</p>
          </div>
          <b className={styles.twitterAuthBadge}>Github Auth Badge</b>
        </div>
      </div>
      <div className={styles.firstCard5}>
        <img className={styles.backgroundIcon} alt="" src="/background5.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.text7}>
          <img
            className={styles.ioniconaarrowforward5}
            alt=""
            src="/ioniconaarrowforward.svg"
          />
          <div className={styles.authenticateWithGoogleContainer}>
            Authenticate With Faebook to earn badge
          </div>
          <b className={styles.facebookAuthBadge}>Facebook Auth Badge</b>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
};

export default Badges;
