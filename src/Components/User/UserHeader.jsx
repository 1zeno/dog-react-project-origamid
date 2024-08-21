import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
    const [title, setTitle] = React.useState('');

    const location = useLocation();

    React.useEffect(()=>{
        const titles = {
            "/conta": "Minha Conta",
            "/conta/estatisticas": "Estatísticas",
            "/conta/postar": "Poste Sua Foto",
        }
        setTitle(titles[location.pathname]);
    },[location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader;