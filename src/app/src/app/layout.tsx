export const metadata = {
  title: 'WellCore',
  description: 'Wellness Session Intake',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
