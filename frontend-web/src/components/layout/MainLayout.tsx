import Head from "next/head";
import { Header } from "./Header";

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => (
  <div className={`min-h-screen bg-primary flex flex-col items-center`}>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
  </div>
);
