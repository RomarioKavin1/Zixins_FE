import styles from "./Topbar.module.css";
import { useWeb3Modal } from '@web3modal/react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'

const Topbar = () => {
    const navigate = useNavigate();
    const { open, close } = useWeb3Modal()
    const {isDisconnected} = useAccount();
    const {address} = useAccount();
    useEffect(() => {
      async () => {
        const {isDisconnected} = useAccount();
      }
      if(isDisconnected){
      close();
      navigate("/login");}
    }, [isDisconnected])
return (<div className={styles.profileElements}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background7@2x.png"
        />
        <div className={styles.projects}>
          <div className={styles.overview}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody} onClick={()=>open()}>
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
              {address}
            </div>
            <b className={styles.DisDisconnectedWallet}>DisDisconnected Wallet</b>
          </div>
          <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
          <img className={styles.icon1} alt="" src="/icon10.svg" />
        </div>
      </div>)
      
    }

export default Topbar;