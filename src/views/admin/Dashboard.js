import React from "react";

// components
import CardUser from "components/Cards/CardUser";
import CardSocialTraffic from "components/Cards/CardSocialTraffic";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardSocialTraffic />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardUser />
        </div>
      </div>
    </>
  );
}
