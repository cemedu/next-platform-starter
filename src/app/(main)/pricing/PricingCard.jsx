"use client";
import Button1 from "@/components/button/Button1";
import StoreAction from "@/context/context.action";
import { Context } from "@/context/StateProvider";
import Icons from "@/library/icons";
import NavLink from "@/library/urls";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const PricingCard = ({ data = {} }) => {
  const sdfg = [
    {
      id: "Sderfs",
      title: "1 Month",
      description: "Get complete access to all courses for 30 days with just one urchase, learn and explore without limits!",
      price: "999",
      access_days: 30,
      access_only: "Full",
      access_type: "Course",
      list: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Can access only one person",
        "Premium support",
        "Can access new added questions",
        "New update always includes",
      ],
    },

    {
      id: "erfTyg",
      title: "6 Months",
      description: "Gain full access to all courses for 180 days with a single purchase, learn and grow at your own pace!",
      price: "5499",
      access_days: 180,
      access_only: "Full",
      access_type: "Course",
      list: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Can access only one person",
        "Premium support",
        "Can access new added questions",
        "New update always includes",
      ],
    },

    {
      id: "rt45gf",
      title: "12 Months",
      description: "Enjoy unrestricted access to all courses for a full year with just one purchase. study and advance continuously!",
      price: "10999",
      access_days: 365,
      access_only: "Full",
      access_type: "Course",
      list: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Can access only one person",
        "Premium support",
        "Can access new added questions",
        "New update always includes",
      ],
    },
  ];

  const router = useRouter();
  const { state: { user }, dispatch } = useContext(Context);

  const BuyNow = async (d) => {
    const payload = {
      id: d.id,
      price: d.price,
      access_type: d.access_type, // course | project
      access_only: d.access_only, // full | javascript | node js
      access_days: d.access_days,  // 30 days
    }

    try {
      if (user?.id) {
        dispatch({ type: StoreAction.data, payload: payload });
        router.push(NavLink.payment);
      } else {
        toast.error("Please login to purchage!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <section>
        <div className="sm:py-8 sm:px-4 mx-auto sm:max-w-screen-xl lg:py-16 lg:px-6">

          <div className="mx-auto sm:max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl text-[var(--text1)] font-bold">Unlock All Courses with Just One Purchase!</h2>
            <p className="mb-5 font-light text-[var(--text1)] sm:text-xl dark:text-gray-400">
              Get Unlimited Access to All Our Courses for the Price of One! Enroll now and enjoy free access to a wide range of courses, including Full Stack Development, Telesales, HR, SEO, SMO, Admin, and more. Don’t miss this chance to enhance your skills across multiple fields at no additional cost!
            </p>
          </div>

          <div className="sm:space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {data?.data?.map((x, i) => (
              <div key={x.price} >
                <div className="relative flex flex-col p-2 sm:p-6 mx-auto max-w-lg text-center bg-[var(--bg1)] rounded-lg border xl:p-8 ">

                  <div className="absolute left-2 top-3">
                    <span className="text-[var(--icon1)] text-xl font-bold border rounded-md px-2 p-1 ">{x.offer}% off</span>
                  </div>
                  <h3 className="mb-4 text-2xl text-[var(--text1)] font-semibold">{x.title}</h3>

                  <p className="font-light text-[var(--text1)] sm:text-lg">
                    {x.description}
                  </p>
                  <div className="py-4 flex justify-center items-center flex-col">
                    <div>
                      <p className="flex items-center text-[var(--text1)]">M.R.P : {Icons.Rupees}<b className="amount"> {x.mrp}</b></p>

                      <div className="flex items-baseline">
                        <span className="mr-2 text-5xl font-extrabold flex items-center text-[var(--text1)]">
                          {Icons.Rupees}
                          {x.price}
                        </span>
                        <span className="text-[var(--text1)]">
                          {x.access_days} Days
                        </span>
                      </div>
                      <div>
                        <span className="flex items-center gap-1 text-[var(--text1)]">You save : {Icons.Rupees}{x.mrp - x.price}  or {x.offer}%</span>
                      </div>
                    </div>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {x?.points?.split(',').map((y) => (
                      <li className="flex items-center space-x-3" key={y}>
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[var(--text1)]">{y}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Button1 value={"Get started"} onClick={() => BuyNow(x)} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default PricingCard;
