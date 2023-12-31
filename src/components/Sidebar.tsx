import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useCallback } from "react";
const Sidebar = () => {
  const navigate = useNavigate();
  const onprofilelick = useCallback(() => {
    navigate("/homeoffers1");
  }, [navigate]);
  const onShijiclick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);
  const onZixinsclick = useCallback(() => {
    navigate("/badges");
  }, [navigate]);
    return(
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
        <div className={styles.signUp} onClick={onZixinsclick}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconrrocketsharp.svg"
          />
          <div className={styles.badges}>Badges</div>
        </div>
        <div className={styles.signIn} onClick={onShijiclick}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconddocumentdefault.svg"
          />
          <div className={styles.offers1}>Offers</div>
        </div>
        <div className={styles.profile} onClick={onprofilelick}>
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
    )
}
export default Sidebar;