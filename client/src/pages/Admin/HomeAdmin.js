import React from 'react'
import styles from './styles.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import{  ReactComponent as Noti} from '../../assets/notification.svg'
import{  ReactComponent as Mail} from '../../assets/mail.svg'

const HomeAdmin = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.topLeft}>
                    <Logo />
                </div>
                <div className={styles.topRight}>
                    <div className={styles.headerIconContainer}>
                        <Noti />
                        <span className={styles.topIconBadge}>2</span>
                    </div><div className={styles.headerIconContainer}>
                        <Mail />
                        <span className={styles.topIconBadge}>2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin
