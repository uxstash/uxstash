import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-date-picker";

const AddArticle = () => {
  const validationSchema = Yup.object().shape({
    url: Yup.string().required("A URL is required."),
    title: Yup.string().required("A title is required.")
  });

  return (
    <Formik
      initialValues={{
        url: "",
        title: "",
        source: "",
        author: "",
        date: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 400);
      }}
    >
      {({ setFieldValue, handleBlur, values, isSubmitting }) => {
        const onChange = date => {
          setFieldValue("date", date);
        };

        return (
          <Form>
            <div className="form-group">
              <label htmlFor="url">URL*</label>
              <Field className="form-input" type="text" name="url" id="url" />
              <ErrorMessage className="form-error" name="url" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title*</label>
              <Field
                className="form-input"
                type="text"
                name="title"
                id="title"
              />
              <ErrorMessage
                className="form-error"
                name="title"
                component="div"
              />
            </div>

            <div className="form-group">
              <label htmlFor="source">Source</label>
              <Field
                className="form-input"
                type="text"
                name="source"
                id="source"
              />
              <ErrorMessage
                className="form-error"
                name="source"
                component="div"
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <Field
                className="form-input"
                type="text"
                name="author"
                id="author"
              />
              <ErrorMessage
                className="form-error"
                name="author"
                component="div"
              />
            </div>

            {/* <div className="form-group">
            <label htmlFor="date">Date Published</label>
            <Field className="form-input" type="date" name="date" id="date" />
            <ErrorMessage className="form-error" name="date" component="div" />
          </div> */}
            <div className="form-group">
              <label htmlFor="date">Date Published</label>
              <DatePicker
                className="form-input datepicker"
                onChange={onChange}
                onBlur={handleBlur}
                value={values.date}
                name="date"
                id="date"
              />
            </div>
            <button
              type="submit"
              className="btn btn-block btn-primary"
              disabled={isSubmitting}
            >
              Add
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddArticle;
