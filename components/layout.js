import styles from './layout.module.scss';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Navbar />
            {children}
        </div>
    );
}