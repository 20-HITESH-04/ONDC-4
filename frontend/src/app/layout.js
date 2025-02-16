import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: "GrandBazzar",
  description: "Generated by create next app",
};

const breadcrumbItems = [
  { label: 'Account', href: '/account' },
  { label: 'Login', href: '/account/login' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}