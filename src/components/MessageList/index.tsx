import { api } from '../../services/api'


import styles from './styles.module.scss';

import logoImg from '../../assets/Logo DoWhile - 2021.png'
import { useEffect } from 'react';

export function MessageList(){

    useEffect(()=> {
        api.get('messages/last3').then ( response => {
            console.log(response.data);
        })
    }, [])  

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="Dowhile2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                    Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={ styles.userImage}>
                            <img src="https://github.com/Danielbarbieri.png" alt="Daniel Barbieri" />
                        </div>
                        <span>Daniel Barbieri</span>

                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                    Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={ styles.userImage}>
                            <img src="https://github.com/Danielbarbieri.png" alt="Daniel Barbieri" />
                        </div>
                        <span>Daniel Faria</span>

                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                    Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={ styles.userImage}>
                            <img src="https://github.com/Danielbarbieri.png" alt="Daniel Barbieri" />
                        </div>
                        <span>Joaquim Barbieri</span>

                    </div>
                </li>

            </ul>
        </div>
    )
}