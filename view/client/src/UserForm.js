import React from "react";
import { Formik } from "formik";
import Yup from "yup";
import VirtualizedSelect from "react-virtualized-select";

import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

const experience = [
  { label: "Experience", value: 1 },
  { label: "Restaurant", value: 2 }
];
const UserForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  const _handleSelect = selectChoice => {
    setFieldValue("eventID", selectChoice.value);
  };

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h1>Hello this is form!</h1>
      <div className="form-group">
        <label>Location</label>
        <input
          name="location"
          type="text"
          className={`form-control ${errors.location &&
            touched.location &&
            "is-invalid"}`}
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.location &&
          touched.location && (
            <div className="invalid-feedback">{errors.location}</div>
          )}
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          name="address"
          type="text"
          className={`form-control ${errors.address &&
            touched.address &&
            "is-invalid"}`}
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address &&
          touched.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
      </div>
      <div className="form-group">
        <label>Type of Event</label>
        <VirtualizedSelect
          name="event"
          value={values.eventID}
          options={experience}
          onChange={_handleSelect}
        />
        <small className="form-text text-muted">This is optional</small>
      </div>

      <button
        type="submit"
        className="btn btn-outline-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "WAIT PLIZ" : "CLICK ME"}
      </button>
    </form>
  );
};

export default Formik({
  mapPropsToValues: props => ({
    location: props.user.location,
    address: props.user.address,
    event: props.user.eventID
  }),

 /* validationSchema: Yup.object().shape({
    location: Yup.string()
      .email("Invalid Location")
      .required("Location is required!"),
    username: Yup.string()
      .required("This man needs a ${path}")
      .when("email", (email, schema) => {
        if (email === "foobar@example.com") {
          return schema.label("papidipupi").min(10);
        }
        return schema.label("babidibiba");
      })
      .test(
        "is-zigzagging",
        "${path} is not zigzagging",
        value => value === "zigzagging"
      )
  }),*/

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit them do the server. do whatever you like!
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(UserForm);
