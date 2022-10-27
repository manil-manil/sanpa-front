import { Controller } from "react-hook-form";
import RadioGroupComponent from "../Common/RadioGroup";
import { FORM_ITEM_TYPE } from "../../utils/form.constants";

const FormItem = ({ item, index, register, control, errors }) => {
  const { name, type, options, data } = item;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        let node;
        const value = field.value;
        const errorData = errors[name];
        const isError = errorData !== undefined;
        const errorMsg = errorData?.message;

        if (type === FORM_ITEM_TYPE.UPLOAD) {
        } else if (type === FORM_ITEM_TYPE.TEXTAREA) {
        } else if (type === FORM_ITEM_TYPE.CHECKBOX) {
        } else if (type === FORM_ITEM_TYPE.TEXT) {
          node = <p>{value}</p>;
        } else if (type === FORM_ITEM_TYPE.RADIO) {
          node = <RadioGroupComponent data={data} />;
        } else {
        }

        return (
          <div key={`${name}${index}`} error={isError}>
            {node}
            {/* {isError && <FormHelperText>{errorMsg}</FormHelperText>} */}
          </div>
        );
      }}
    />
  );
};

export default FormItem;
