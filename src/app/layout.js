import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: 'Felix Waweru',
  description: 'I am a Software Engineer with a keen passion for computing technologies. I have over 4 years professional experience using OOP programming(Python, JavaScript, C++, Java) along with their frameworks.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
