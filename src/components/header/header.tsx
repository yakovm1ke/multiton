import { TonConnectButton } from '@tonconnect/ui-react'

import styles from './header.module.css'
import { Title } from '@mantine/core'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Title order={1}>
        abcton
      </Title>

      <TonConnectButton/>
    </div>
  )
}