import '../styles/globals.css'

export const metadata = {
  title: 'Custom Sports',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout