import React from "react";
import Header from '@/components/header'

const About : React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="p-8 bg-gray-100 text-gray-700">
                <h1 className="text-3xl font-semibold mb-4">This is my next.js about page</h1>
          <p> Welcome to our Next.js app! This application is built with the latest
           web technologies, including React, Next.js, and Tailwind CSS.</p>
                </section>
            </main>
        </div>
        // <Header/>
        // <section className="p-8 bg-gray-100 text-gray-700">
        //     <h1 className="text-3xl font-semibold mb-4">This is my next.js about page</h1>
        //     <p> Welcome to our Next.js app! This application is built with the latest
        //     web technologies, including React, Next.js, and Tailwind CSS.</p>
        // </section>
    );
};

export default About;