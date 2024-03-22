import { useRouter } from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
    const { query } = useRouter()

    return (
        <MainContainer title="Юзер">
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя пользователя - {user.name} </div>
            </div>
        </MainContainer>
    );
};

export async function getServerSideProps({ params }) {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    // Pass data to the page via props
    return { props: { user } }
}