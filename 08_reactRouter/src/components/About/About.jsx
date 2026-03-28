import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://i.pinimg.com/736x/43/31/f4/4331f4b23c7237a014ef1634b344216d.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              A Gold Car With Paint Job In Golden Color
            </h2>
            <p className="mt-6 text-gray-600">
              The golden car features a striking champagne gold paint job with
              metallic flakes that catch the light, creating a dynamic,
              jewel-like shimmer as it moves. This sophisticated finish blends
              warmth and elegance, offering a luxurious alternative to
              traditional metallics. Under sunlight, the hue shifts subtly from
              soft amber to radiant gold, enhancing the vehicle's curves and
              giving it a high-end, custom appearance. The paint is protected by
              a durable clear coat, ensuring long-lasting luster and resistance
              to UV damage, while maintaining a showroom-quality shine with
              minimal maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
