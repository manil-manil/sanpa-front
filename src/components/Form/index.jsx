import { useEffect } from "react";
import FormItem from "./FormItem";
import { useForm } from "react-hook-form";

import styles from "./css/form.css";
import { defaultSubmitButton } from "../../../utils/json/button.json";
// import Button from "../Button";

// import validationHandle from "./validationHandle";

export default function FormContainer({
  list,
  btns = [],
  isAllError = false,
  className,
  handleOnSubmit,
  description,
  values = {},
}) {
  const { handleSubmit, register, control, formState, setValue, setError } =
    useForm();

  const formRender = (list) => {
    if (list && list.length > 0) {
      return list.map((item, index) => {
        return (
          <FormItem
            key={index}
            item={item}
            index={index}
            register={register}
            control={control}
            errors={formState.errors}
          />
        );
      });
    } else {
      return null;
    }
  };

  const btnsRender = (btns) => {
    const btnJson = btns ?? defaultSubmitButton;

    // return <Button data={btnJson} />;
  };

  const onSubmit = async (data) => {
    try {
      handleOnSubmit(data);
      // if (submitResponse == false)
      //   validationHandle({ list, isAllError, setError });
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(values)) {
      setValue(key, value);
    }
  }, [values]);

  return (
    <>
      <form
        css={styles}
        // className={`${styles[className]} ${styles.form_wrapper}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.form_container}>{formRender(list)}</div>
        {btns.length > 0 && (
          <div className={styles.btns_container}>{btnsRender(btns)}</div>
        )}
      </form>
      {description && <p>{description}</p>}
    </>
  );
}
