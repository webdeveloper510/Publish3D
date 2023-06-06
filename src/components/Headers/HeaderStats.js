import React, { useState, useEffect } from "react";
import { API } from "config/api";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [product, setProduct] = useState([]);
  const [publish, setPublish] = useState([]);
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState([]);

  const get_products = (event) => {
    fetch(API.BASE_URL+"api/get_counts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.products);
        setUsers(data.users);
        setPublish(data.publish);
        setActive(data.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    get_products();
  }, []);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-1/2 lg:w-3/12 px-4">
                <CardStats
                  statSubtitle="Products"
                  statTitle={product}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-1/2 lg:w-3/12 px-4">
                <CardStats
                  statSubtitle="USERS"
                  statTitle={users}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-1/2 lg:w-3/12 px-4">
                <CardStats
                  statSubtitle="Active Users"
                  statTitle={active}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-1/2 lg:w-3/12 px-4">
                <CardStats
                  statSubtitle="Published Products"
                  statTitle={publish}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
