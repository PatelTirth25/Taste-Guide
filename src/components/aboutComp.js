"use client"
import React from 'react';
import Image from 'next/image';
import img1 from "../images/homePage.webp"
import img2 from "../images/homePage2.webp"

const AboutComponent = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-semibold mb-8 text-center">Welcome to Recipe Manager</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div>

            <Image src={img1} alt="About Image 1" className="mx-auto w-4/5 h-4/5  rounded-lg shadow-md mb-4" />
            </div>
            <p className="text-lg">Organize Your Recipes</p>
            <p className="text-gray-300">Keep all your favorite recipes in one place. Whether it's family recipes passed down through generations or new discoveries from your favorite chefs, Recipe Manager helps you organize them all.</p>
          </div>
          <div className="text-center">
            <div>

            <Image src={img2} alt="About Image 2" className="mx-auto w-4/5 h-4/5 rounded-lg shadow-md mb-4" />
            </div>
            <p className="text-lg">Plan Your Meals</p>
            <p className="text-gray-300">Plan your weekly meals effortlessly with Recipe Manager. Browse through your collection of recipes and add them to your meal planner for the week ahead.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
