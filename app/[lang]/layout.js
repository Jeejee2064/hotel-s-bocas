import { poppins } from './fonts'
import './globals.css'

export const metadata = {
 title: 'Hotel S Bocas',
 description: 'Hotel and Restaurant in Bluff Bocas',
}


export default function RootLayout({ children, params }) {

  console.log(params, 'params')

  return (
    <html lang={params.lang}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
