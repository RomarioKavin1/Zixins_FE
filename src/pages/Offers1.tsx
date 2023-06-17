import { FunctionComponent } from "react";
import styles from "./Offers1.module.css";
const Offers1: FunctionComponent = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.background}>
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarChild} />
        <div className={styles.needHelp}>
          <div className={styles.backgroundParent}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background12@2x.png"
            />
            <div className={styles.buttonbase}>
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <div className={styles.icon}>
                      <div className={styles.div}></div>
                    </div>
                    <b className={styles.text}>DOCUMENTATION</b>
                    <div className={styles.icon}>
                      <div className={styles.div}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.minwidth}>
                  <div className={styles.content} />
                </div>
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.pleaseCheckOur}>Please check our docs</div>
              <b className={styles.needHelp1}>Need help?</b>
            </div>
            <div className={styles.icon2}>
              <div className={styles.iconChild} />
              <img
                className={styles.ioniconhhelpcircle}
                alt=""
                src="/ioniconhhelpcircle.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.signUp}>
            <div className={styles.signUpChild} />
            <img
              className={styles.ioniconrrocketsharp}
              alt=""
              src="/ioniconrrocketsharp.svg"
            />
            <div className={styles.badges}>Badges</div>
          </div>
          <div className={styles.signIn}>
            <div className={styles.signUpChild} />
            <img
              className={styles.ioniconrrocketsharp}
              alt=""
              src="/ioniconddocumentdefault.svg"
            />
            <div className={styles.offers1}>Offers</div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileChild} />
            <div className={styles.profileItem} />
            <img
              className={styles.ioniconppersondefault}
              alt=""
              src="/ioniconppersondefault3.svg"
            />
            <div className={styles.profile1}>Profile</div>
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.routerHackathon}>Router Hackathon</div>
        </div>
        <img className={styles.sidebarItem} alt="" src="/vector-62.svg" />
      </div>
    </div>
  );
};

export default Offers1;
