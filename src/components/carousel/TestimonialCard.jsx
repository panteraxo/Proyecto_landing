import { Star } from "lucide-react";
import React from "react";

function TestimonialCard({ image, name, review }) {
  return (
    <div className="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow p-5">
      <div className="flex flex-row mb-4 justify-center">
        <img
          alt={name}
          src={image}
          className="size-10 mt-5 md:mt-1 md:size-14 rounded-full object-cover"
        />
        <div className="ml-4 text-center">
          <div className="flex justify-center gap-0.5 mb-1">
            {Array(5)
              .fill()
              .map((_, index) => (
                <Star
                  key={index}
                  fill="yellow"
                  className="md:size-8 size-3 sm:size-6 text-yellow-400"
                />
              ))}
          </div>
          <p className="mt-0.5 md:text-lg sm:text-xs font-medium">{name}</p>
        </div>
      </div>
      <div className="text-sm text-gray-700">{`"${review}"`}</div>
    </div>
  );
}

export default TestimonialCard;
