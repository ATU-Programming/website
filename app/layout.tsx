import Image from 'next/image'

import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div><Image src="/logo.png" alt="Profile" width={200} height={78} /></div>
        {children}
      </body>
    </html>
  )
}