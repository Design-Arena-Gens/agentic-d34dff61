export const metadata = {
  title: 'Original Griechisches Gyros',
  description: 'Authentisches griechisches Gyros - Kommen Sie direkt rein!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
