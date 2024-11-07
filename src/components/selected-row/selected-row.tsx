import {  Card } from '@mantine/core'
import { Address } from '../../models/address'

import styles from './selected-row.module.css'

type SelectedAddress = {
  initialIndex: number
} & Address

export type SelectedRowProps = {
  selected: SelectedAddress[]
}

export const SelectedRow = (props: SelectedRowProps) => {
  return (
    <Card>
      <div className={styles.container}>
        <div>Selected: {props.selected.length}</div>
      </div>
    </Card>
  )
}