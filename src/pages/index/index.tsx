import { useState } from 'react'
import { AddressesForm } from '../../components/addresses-form/addresses-form'
import { Address } from '../../models/address'
import { notifications } from '@mantine/notifications'

export const IndexPage = () => {
  const [addresses, setAddresses] = useState<Address[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  // TODO add validation here
  const sendMoney = async () => {
    try {
      setLoading(true)

      if (!addresses.length) {
        throw new Error('Addresses can\'t be empty')
      }

      // TODO remove mock request
      await new Promise((res) => setTimeout(() => res(true), 1000))

      notifications.show({
        title: 'Success',
        message: 'Money have been sent',
        color: 'green',
      })
    } catch(error) {
      let errorMessage = 'Something went wrong'

      if (error instanceof Error) {
        errorMessage = error.message
      }

      notifications.show({
        title: 'Error occurred!',
        message: errorMessage,
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AddressesForm
        addresses={addresses}
        onAdd={() => setAddresses([...addresses, {}])}
        onDelete={(index) => setAddresses(addresses.filter((_, idx) => idx !== index))}
        onDeleteAll={() => setAddresses([])}
        onChange={(index, value) => setAddresses(addresses.map((item, idx) => idx === index ? value : item))}
        onSend={() => sendMoney()}
        loading={loading}
      />
    </div>
  )
}