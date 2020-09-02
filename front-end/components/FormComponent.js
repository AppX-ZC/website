import React from "react";
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
  console.log(data);
  return (
    <div className="col-md-6 mx-auto">
      <Form className={styles.form}>
        {data.map((form, index) => (
          <div className={styles.formCard + " row"} key={index}>
            <h4 className={styles.formTitle}> {form.title} </h4>
            {form.data.map((input, index) => {
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
                    >
                      {input.options.map((option) => (
                        <option value={option}>{option}</option>
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
                    />
                  </InputGroup>
                </FormGroup>
              );
            })}
          </div>
        ))}
        <Button>Submit</Button>
      </Form>
    </div>
  );
};
export default FormComponent;
