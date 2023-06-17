import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
const Landing: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonBaseContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.landing}>
      <div className={styles.landingChild} />
      <div className={styles.text}>
        <div className={styles.inspiredByThe}>INSPIRED BY THE FUTURE:</div>
        <b className={styles.theZxnAContainer}>
          <p className={styles.theZxn}>The ‘Zìxìn’</p>
          <p className={styles.aCrossChainAuthenticator}>
            A Cross-chain Authenticator
          </p>
        </b>
      </div>
      <div className={styles.buttonbase} onClick={onButtonBaseContainerClick}>
        <div className={styles.widthStructure}>
          <div className={styles.heightStructure}>
            <div className={styles.buttonBody}>
              <div className={styles.icon}>
                <div className={styles.div}></div>
              </div>
              <b className={styles.text1}>Try Now</b>
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
    </div>
  );
};

export default Landing;
