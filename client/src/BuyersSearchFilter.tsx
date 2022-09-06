import React from "react";
import { Select, SelectProps } from "antd";
import { Buyer } from "./Api";
import { SearchFilters } from "./RecordSearchFilters";

type Props = {
  buyers: Buyer[];
  filters: SearchFilters;
  onChange: (newFilters: SearchFilters) => void;
};
type Options = SelectProps["options"];
function BuyersSearchFilter(props: Props) {
  const { buyers, filters, onChange } = props;

  const buyersOptions: Options = buyers.map((buyer) => ({
    label: buyer.name,
    value: buyer.id,
  }));

  const handleChange = React.useCallback(
    (value, options: Options) => {
      console.log(options);
      onChange({
        ...filters,
        buyerIds: options.map((e) => e.value.toString()),
      });
    },
    [onChange, filters]
  );

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
