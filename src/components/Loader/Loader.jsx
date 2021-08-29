import Loader from "react-loader-spinner";
import styles from './Spinner.module.css'
const LoaderSpinner = () => {
  
    return (
        <div className={styles.LoaderSpinner}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={5000} //3 secs
            />
        </div>
    );
};

export default LoaderSpinner;