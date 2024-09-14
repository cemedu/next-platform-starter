import React from "react";
import PricingCard from "./PricingCard";
import { GetSession } from "@/helper/GetSession";
import PayImport from "./PayImport";
import Actions from "@/actions/actions";
import './style.css'

const page = async () => {
  const data = {};
  const token = GetSession();
  data.user = await Actions.User.Info(token);
  data.pricing = await Actions.Pricing.GetAll();

  if (data.pricing.success) {
    data.data = data.pricing.data;
  } else {
    data.data = []
  }


  return (
    <div className="bg-[var(--bg1)]">
      <PayImport />
      <PricingCard user={data.user.data || {}} data={data.data || []} />
    </div>
  );
};

export default page;
