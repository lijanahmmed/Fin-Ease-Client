import React from 'react';
import Banner from '../Components/Banner';
import BudgetTips from '../Components/BudgetTips';
import FinancialMatter from '../Components/FinancialMatter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BudgetTips></BudgetTips>
            <FinancialMatter></FinancialMatter>
        </div>
    );
};

export default Home;