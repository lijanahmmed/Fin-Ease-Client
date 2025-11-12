import React, { use } from "react";
import Banner from "../Components/Banner";
import BudgetTips from "../Components/BudgetTips";
import FinancialMatter from "../Components/FinancialMatter";
import Overview from "../Components/Overview";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Banner></Banner>
      {user ? <Overview></Overview> : ""}
      <BudgetTips></BudgetTips>
      <FinancialMatter></FinancialMatter>
    </div>
  );
};

export default Home;
