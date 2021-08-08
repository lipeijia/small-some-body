import { useState } from 'react';

export function useForm(
  initialValues = {
    name: '',
    year: '',
    location: '',
    logo: '',
    banner: '',
    intro: '',
    SDGs: [],
  },
  validateOnChange = false,
  validate
) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...rest } = props;
  return (
    <form autoComplete='off' {...rest}>
      {props.children}
    </form>
  );
}
