import Head from "next/head";
import MyLink from "./MyLink"

const MainContainer = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta keywords="next js" />
                <title>{title}</title>
            </Head>
            <div className="navbar">
                <MyLink
                    href="/"
                    text="Главная"
                />
                <MyLink
                    href="/users"
                    text="Пользователи"
                />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
}

export default MainContainer;