import { Montserrat } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'PACKAR Project',
  description: 'Entrega tus pedidos al destino que quieras.',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
        <Script id='maps' src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBLXO2NE85by73AqT3BCdP3NgE3mhRsfzQ&libraries=places`}></Script>
     </html>
    </StoreProvider>
  );
}