import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui ewrror message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  
  
  renderInput =({ input, label, meta }) => {
    // console.log(formProps);
    console.log(meta);
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {/* <div>{ meta.error }</div> */}
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    // console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = 'You must enter a title';
  }
  if (!formValues.decription) {
    // only ran if the user did not enter a description
    errors.description = 'You must enter a description';
  }
  return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
