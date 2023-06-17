import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeOffers1.module.css";
import Sidebar from "../components/Sidebar";
import Profilecard from "../components/Profilecard";
const HomeOffers1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTeamsContainerClick = useCallback(() => {
    navigate("/homeoffers2");
  }, [navigate]);

  return (
    <div className={styles.homeoffers1}>
      <div className={styles.homeoffers1Child} />
      <div className={styles.text}>
        <div className={styles.profile}>Profile</div>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.profile1}>
              <span>{` `}</span>
              <span className={styles.profile2}>/ Profile</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.profileElements}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background7@2x.png"
        />
        <div className={styles.projects}>
          <div className={styles.overview}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody}>
                  <img className={styles.icon} alt="" src="/icon9.svg" />
                  <b className={styles.text1}>Sign Out</b>
                </div>
              </div>
              <div className={styles.minwidth}>
                <div className={styles.content} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.avatar}>
          <div className={styles.name}>
            <div className={styles.x2f59dbbcb3b393d86dbd539105e22}>
              0x2f59dBBcb3B393D86dbd539105E22ee4CaC23563
            </div>
            <b className={styles.connectedWallet}>Connected Wallet</b>
          </div>
          <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
          <img className={styles.icon1} alt="" src="/icon10.svg" />
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.backgroundIcon1}
          alt=""
          src="/background8@2x.png"
        />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward}
            alt=""
            src="/ioniconaarrowforward2.svg"
          />
          <b className={styles.welcomeBack}>Welcome back!</b>
          <div className={styles.niceToSee}>Nice to see you, Mark Johnson!</div>
        </div>
      </div>
      <div className={styles.chainselect}>
        <img
          className={styles.backgroundIcon2}
          alt=""
          src="/background9@2x.png"
        />
        <b className={styles.ethereum}>Ethereum</b>
      </div>
      <div className={styles.tokenview}>
        <div className={styles.background}>
          <div className={styles.tabs}>
            <div className={styles.teams} onClick={onTeamsContainerClick}>
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <img className={styles.icon} alt="" src="/icon11.svg" />
                    <b className={styles.text3}>Shíjì</b>
                  </div>
                </div>
                <div className={styles.minwidth}>
                  <div className={styles.content} />
                </div>
              </div>
            </div>
            <div className={styles.overview1}>
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <img className={styles.icon} alt="" src="/icon7.svg" />
                    <b className={styles.text4}>Zìxìn</b>
                  </div>
                </div>
                <div className={styles.minwidth}>
                  <div className={styles.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card3}>
          <Profilecard name='Linkedin Auth' description='linkedin' imgsrc='/image5.svg'/>
          </div>
          <div className={styles.card2}>
            <Profilecard name='Github Auth' description='Github' imgsrc='/image3.svg'/>
          </div>
          <div className={styles.card1}>
            <Profilecard name='Google Auth' description='Google' imgsrc='/image6@2x.png'/>
          </div> 
        </div>
      </div>
      <Sidebar/>
    </div>
  );
};

export default HomeOffers1;
