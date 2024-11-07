import { Outlet } from 'react-router-dom'
import styles from './default-layout.module.css'
import { Header } from '../header'
import { Footer } from '../footer/footer'
import { Notifications } from '@mantine/notifications'

export const DefaultLayout = () => {
  return (
    <div className={styles.page}>
      <div className={styles.notifications}>
        <Notifications
          withinPortal={false}
        />
      </div>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Header />
        </div>
      </header>

      <div className={styles.content}>
        <Outlet />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}