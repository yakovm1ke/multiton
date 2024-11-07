import { Button, Checkbox, Flex, NumberInput, TextInput } from '@mantine/core'
import { Address } from '../../models/address'

import styles from './addresses-form.module.css'
import { IconPlus, IconSend, IconTrash } from '@tabler/icons-react'
import { SelectedRow } from '../selected-row/selected-row'

export type AddressesFormProps = {
  addresses: Address[]
  loading: boolean
  onAdd: () => void
  onSend: () => void
  onDelete: (index: number) => void
  onDeleteAll: () => void
  onChange: (index: number, address: Address) => void
}

export const AddressesForm = (props: AddressesFormProps) => {
  const setValues = (index: number, values: Partial<Address>) => {
    props.onChange(index, {
      ...props.addresses[index],
      ...values
    })
  }

  const selected = props.addresses
      .map((it, index) => ({
        ...it,
        initialIndex: index,
      }))
      .filter(it => it.checked)

  return (
    <Flex
      direction={'column'}
      gap={'lg'}
    >
      {!!props.addresses.length && (
        <div className={styles.addressItem}>
          <div></div>
          <div>Address</div>
          <div>Amount</div>
          <div></div>

          {props.addresses.map((item, index) => (
            <>
              <Checkbox
                disabled={props.loading}
                checked={!!item.checked}
                onChange={(event) => setValues(index, {checked: event.currentTarget.checked})}
              />

              <TextInput
                disabled={props.loading}
                variant='filled'
                placeholder='Input text'
                value={item.address || ''}
                onChange={(event) => setValues(index, {address: event.currentTarget.value})}
              />

              <NumberInput
                disabled={props.loading}
                variant='filled'
                placeholder='Input number'
                value={item.value}
                allowNegative={false}
                onValueChange={(value) => setValues(index, {value: value.floatValue})}
              />

              <Button
                disabled={props.loading}
                variant='light'
                onClick={() => props.onDelete(index)}
              >
                <IconTrash />
              </Button>
            </>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <Button
          disabled={props.loading}
          size='lg'
          onClick={() => props.onAdd()}
          variant='outline'
        >
          <IconPlus />
          Add address
        </Button>

        {!!props.addresses.length && (
          <Button
            disabled={props.loading}
            size='lg'
            onClick={() => props.onDeleteAll()}
            variant='light'
          >
            <IconTrash />
            Remove all
          </Button>
        )}
      </div>


      {!!selected.length && (
        <SelectedRow
          selected={selected}
        />
      )}


      {!!props.addresses.length && (
        <Button
          loading={props.loading}
          onClick={() => props.onSend()}
          size='lg'
        >
          <IconSend />
          Send money
        </Button>
      )}

    </Flex>
  )
}