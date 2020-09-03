import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Forms.module.css";

const FormComponent = ({ data }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="col-md-6 mx-auto">
      <Form className={styles.form + " pb-5"}>
        {data.map((form, index) => (
          <div className={styles.formCard + " row"} key={index}>
            {form.title ? (
              <h4 className={styles.formTitle}> {form.title} </h4>
            ) : null}
            {form.data.map((input, index) => {
              if (input.type === "textArea") {
                return (
                  <FormGroup style={{ width: 100 + "%" }}>
                    <Label
                      for={input.name}
                      className={styles.formTitle}
                      style={{ marginBottom: 0 }}
                    >
                      {input.label}
                    </Label>
                    {input.subLabel ? <p> {input.subLabel} </p> : null}
                    <Input
                      type="textarea"
                      name={input.name}
                      id={input.name}
                      className={styles.formInput}
                      onChange={(e) => handleChange(e)}
                      style={{ borderLeft: " 1px solid #c1c1c1 " }}
                    />
                  </FormGroup>
                );
              }
              if (input.type === "select") {
                return (
                  <FormGroup
                    key={index}
                    className={
                      input.size && input.size === 0.5 ? "col-sm-6" : "col-12"
                    }
                  >
                    <Label for={input.name} className={styles.formLabel}>
                      {input.label}
                    </Label>
                    <Input
                      type="select"
                      name={input.name}
                      id={input.name}
                      className={styles.formInput}
                      style={{ borderLeft: " 1px solid #c1c1c1 " }}
                      onChange={(e) => handleChange(e)}
                    >
                      <option>select</option>
                      {input.options.map((option, index) => (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                );
              }

              if (input.type === "checkbox" || input.type === "radio") {
                return (
                  <FormGroup
                    key={index}
                    className={
                      input.size && input.size === 0.5
                        ? "col-sm-6"
                        : "col-12" + " test"
                    }
                  >
                    <Label check>
                      <Input
                        type={input.type}
                        name={input.name ? input.name : null}
                        value={input.label}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>{input.label} </span>
                    </Label>
                  </FormGroup>
                );
              }
              return (
                <FormGroup
                  key={index}
                  className={
                    input.size && input.size === 0.5 ? "col-sm-6" : "col-12"
                  }
                >
                  <Label for={input.name} className={styles.formLabel}>
                    {input.label}
                  </Label>
                  <InputGroup>
                    <InputGroupAddon addonType="append">
                      <InputGroupText style={{ width: 40 }}>
                        <FontAwesomeIcon icon={input.icon} className="w-100" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type={input.type}
                      name={input.name}
                      id={input.name}
                      className={styles.formInput}
                      onChange={(e) => handleChange(e)}
                    />
                  </InputGroup>
                </FormGroup>
              );
            })}
          </div>
        ))}
        <Button onClick={handleSubmit} className={styles.btn}>
          Send
        </Button>
      </Form>
    </div>
  );
};
export default FormComponent;
