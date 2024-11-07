import styles from './footer.module.css'
import { Anchor } from '@mantine/core'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      Join&nbsp;
      <Anchor
        target='_blank'
        href='https://t.me/abcton'
      >
        telegram community
      </Anchor>
    </div>
  )
}
