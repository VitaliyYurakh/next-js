import Link from "next/link";
import styles from '../styles/link.module.css'

const MyLink = ({ text, href }) => {
    return (
        <Link className={styles.link} href={href}>
            {text}
        </Link>
    );
}

export default MyLink;