import styles from "./zixins.module.css";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
}
const Zicins: React.FC<ChildComponentProps> = (props) => {
  const { name, imgsrc, description } = props;
  return (
    <div>
      <img className={styles.backgroundIcon} alt="" src={imgsrc} />
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
            >{`Authenticate With `+ name +` to `}</p>
            <p className={styles.authenticateWithTwitter}>earn badge</p>
          </div>
          <b className={styles.twitterAuthBadge}>{description}</b>
        </div>
      </div>
  );
};
export default Zicins;
