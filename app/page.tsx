import React from "react";

import Header from "../components/header";

const HomePage : React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js App!</h1>
      
      </main>
    </div>
  );
};
export default HomePage;