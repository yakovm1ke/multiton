import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import './styles/main.css'

const theme = createTheme({
  fontFamily: 'IBM Plex Sans',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      defaultColorScheme='dark'
      theme={theme}
    >
      <TonConnectUIProvider
        // TODO
        manifestUrl="http://localhost:3000/tonconnect-manifest.json"
      >
        <RouterProvider
          router={router}
        />
      </TonConnectUIProvider>
    </MantineProvider>
  </StrictMode>,
)
