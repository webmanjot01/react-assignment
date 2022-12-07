import React, { useEffect, useState } from "react";
import avtarData1 from "../../assets/avatar2.png";
import { avtarData } from "../../data/data";
// import { ReactComponent as Star } from "../../assets/avataaars.svg";
// import avt from "../../logo.svg";

const Index = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 xl:px-20 py-4">
        {Data ? (
          Data.map((item, index) => {
            return (
              <div key={index} className="max-w-full rounded overflow-hidden shadow-lg mb-4 bg-white">
                <div className="flex px-6 py-4 flex-col md:flex-row">

                  <img

                    src={avtarData[index].img}
                    alt="avtar"
                    style={{ height: "auto", width: "200px" }}
                    className="mr-6"
                  />


                  <div>
                    <h1 className="font-medium text-3xl mb-2">{item.name}</h1>
                    <ul className="list-none" style={{ lineHeight: "1.8rem" }}>
                      <li className="text-gray-700 text-base">
                        <b className="text-black">Email:</b> {item.email}
                      </li>

                      <li className="text-gray-700 text-base">
                        <b className="text-black">Phone:</b> {item.phone}
                        x56442
                      </li>

                      <li className="text-gray-700 text-base">
                        <b className="text-black"> Company:</b>{" "}
                        {item.company.name}
                      </li>

                      <li className="text-gray-700 text-base">
                        <b className="text-black"> Website:</b>
                        {item.website}
                      </li>

                      <li className="text-gray-700 text-base">
                        <b className="text-black">Address:</b>{" "}
                        {item.address.street +
                          ", " +
                          item.address.suite +
                          ", " +
                          item.address.city +
                          ", " +
                          item.address.zipcode}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        )}
      </div>

      {/* <img src={Star} /> */}
      {/* {avtarData?.map((item, index) => {
        return (
          <div key={index}>
          </div>
        );
      })} */}
    </div>
  );
};

export default Index;
