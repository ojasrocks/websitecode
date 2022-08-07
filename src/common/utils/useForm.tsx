import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import emailjs , { init } from 'emailjs-com';

init("user_H4p6qYDYDTbtMqM1qHm4o");

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    emailjs.send('service_kpcfghp','template_hm1x5nr', {
      ...values,
    }, 'user_H4p6qYDYDTbtMqM1qHm4o')
    .then((response) => {
      setShouldSubmit(true);
       //alert('SUCCESS! '+response.status+' '+response.text);
    }, (err) => {
       alert('FAILED...'+err);
    });
  
    //
    /*const url = "";
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        });
    }*/
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
