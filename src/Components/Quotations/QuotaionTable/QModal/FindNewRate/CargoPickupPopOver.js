import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PickupRequest } from "../../../../../Redux/Actions/PickupAction";

function CargoPickupPopOver({
  setSelectedValue,
  setPopoverOpen,
  setSelectedCode,
  originPort,
}) {
  const dispatch = useDispatch();
  const pickupdata = useSelector(
    (state) => state?.Pickup?.pickuppointlist?.pickuppointlist
  );
  const [options, setOptions] = useState([]);
  const [showOption, setShowOption] = useState(false);

  const handleSelectChange = (value) => {
    const selectedOption = options.find((option) => option.value === value);
    const code = selectedOption ? selectedOption.code : null;
    if (value) {
      setSelectedValue(value);
      setSelectedCode(code);
      setPopoverOpen(false);
    }
    setShowOption(false);
  };

  const onSearch = (value) => {
    console.log("value", value);
    if (value.length >= 3) {
      setShowOption(true);
      dispatch(
        PickupRequest({
          country: originPort?.port_country,
          pickup_place: value,
        })
      );
    } else {
      setShowOption(false);
      setOptions([]);
    }
  };
  useEffect(() => {
    if (pickupdata && Array.isArray(pickupdata)) {
      const updatedOptions = pickupdata?.map((item, index) => ({
        value: item.list_value,
        label: item.list_value,
        code: item.code,
        key: index,
      }));
      setOptions(updatedOptions);
    }
  }, [pickupdata]);
  

  return (
    <div className="div-colaligned popover-checkbox popover-open w-200">
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
        // options={[
        //   { value: 'New York', label: 'New York' },
        //   { value: 'Los Angeles', label: 'Los Angeles' }
        // ]}
      />
    </div>
  );
}

export default CargoPickupPopOver;
