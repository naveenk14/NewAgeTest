import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryRequest } from "../../../../../Redux/Actions/DeliveryAction";

function CargoDeliveryPopOver({
  setSelectedValue,
  setPopoverOpen,
  destPort,
  setSelectedCode1,
}) {
  const dispatch = useDispatch();
  const delivery = useSelector(
    (state) => state?.Delivery?.Delivery?.deliverypointlist
  );
  const [options, setOptions] = useState([]);
  const [showOption, setShowOption] = useState(false);

  const handleSelectChange = (value) => {
    const selectedOption = options.find((option) => option.value === value);
    console.log(selectedOption)
    const code = selectedOption ? selectedOption.code : null;
    console.log(value)
    if (value) {
      setSelectedValue(value);
      console.log(code)
      setSelectedCode1(code);
      setPopoverOpen(false);
    }
    // else{
    //   setSelectedValue("");
    //   // console.log(code)
    //   setSelectedCode1("");
    // }
    setShowOption(false);
  };
  
  const onSearch = (value) => {
    if (value.length >= 3) {
      setShowOption(true);
      dispatch(
        DeliveryRequest({
          country: destPort?.port_country,
          delivery_place: value,
        })
      );
    }
  };

  useEffect(() => {
    if (delivery && Array.isArray(delivery)) {
      const updatedOptions = delivery?.map((item, index) => ({
        value: item.list_value,
        label: item.list_value,
        key: index,
        code: item.zip_code,
      }));
      setOptions(updatedOptions);
    }
  }, [delivery]);
  return (
    <div className="div-colaligned popover-checkbox1 popover-open w-200">
      <Select
        showSearch
        placeholder="Select City or Zipcode"
        optionFilterProp="label"
        onChange={handleSelectChange}
        onSearch={onSearch}
        options={showOption ? options : []}
        filterOption={(input, option) =>
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      />
    </div>
  );
}

export default CargoDeliveryPopOver;
