import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
              <img
                src="https://i.pinimg.com/1200x/e2/72/09/e27209ad2990770406806afdde5dbd5e.jpg"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                {userid.toUpperCase()}
              </h2>
              <p className="mt-6 text-gray-600">
                Welcome to BillionAir, {userid.toLocaleUpperCase()}! Unlock the freedom to
                drive luxury and performance vehicles anytime, anywhere. Whether
                you're looking to buy your dream car or rent for your next
                adventure, BillionAir offers seamless access to premium
                automobiles with unmatched service and flexibility. Your journey
                begins here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
