import { NextPage } from "next";
import { HomeScreen } from "@components/screens/home";
import { MainLayout } from "@components/layout";

export const HomePage: NextPage = () => {
  return (
    <MainLayout title={"Home 🏠"}>
      <HomeScreen />
    </MainLayout>
  );
};

export default HomePage;
