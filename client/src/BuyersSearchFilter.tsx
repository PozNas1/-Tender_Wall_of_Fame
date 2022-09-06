import React from "react";
import { Select, SelectProps } from "antd";
import { Buyer } from "./Api";

type Props = {
  buyers: Buyer[];
};

function BuyersSearchFilter(props: Props) {
  const { buyers } = props;

  const buyersOptions: SelectProps["options"] = buyers.map((buyer) => ({
    label: buyer.name,
    value: buyer.name,
  }));

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      mode="multiple"
      style={{
        width: "100%",
        marginBlock: 10,
      }}
      placeholder="Select buyers"
      defaultValue={[]}
      onChange={handleChange}
      options={buyersOptions}
    />
  );
}

export default BuyersSearchFilter;
