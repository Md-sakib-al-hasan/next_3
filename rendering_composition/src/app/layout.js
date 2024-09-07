// import StyledComponentsRegistry from "./components/StyledJsxRegistry"


export const metadata = {
  title: 'My Next.js App',
  description: 'A demo app using styled-jsx with Next.js 13+',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        {
          children
        }
      </body>
    </html>
  )
}
