import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function DetailApplicationUser() {
  const [data, setData] = useState([]);
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("a");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://internarea-clone.onrender.com/api/application/${id}`,
        { timeout: 10000 }
      );

      setData([response.data]);
    };
    fetchData();
  }, [id]);

  console.log(data);
  return (
    <div>
      {data.map((data) => (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover  rounded"
                src={data.user.photo}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  Company name
                </h2>
                <h1 class="text-gray-900 font-bold title-font mb-1 -mt-8">
                  {data.company}
                </h1>
                <h2>Cover Letter</h2>
                <p class="leading-relaxed font-bold -mt-8">
                  {data.coverLetter}
                </p>
                <div class="flex mt-6  pb-5 border-b-2 border-gray-100 mb-5">
                  <span class="mr-3">Application Date</span>
                  <br />
                  <p className="font-bold">
                    {new Date(data?.createAt).toLocaleDateString()}
                  </p>
                </div>
                <h4 className=" mt-9">Applied By</h4>
                <p className="font-bold -mt-8">{data.user.name}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default DetailApplicationUser;
