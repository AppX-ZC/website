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
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Forms.module.css";

const FormComponent = ({ data }) => {
  console.log(data);
  return (
    <div className="col-md-6 mx-auto">
      <Form className={styles.form}>
        {data.map((form, index) => (
          <div className={styles.formCard} key={index}>
            <h4 className={styles.formTitle}> {form.title} </h4>

            {form.data.map((input, index) => (
              <FormGroup key={index}>
                <Label for={input.name}>{input.label}</Label>
                <InputGroup>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <FontAwesomeIcon icon={input.icon} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type={input.type} name={input.name} id={input.name} />
                </InputGroup>
              </FormGroup>
            ))}
          </div>
        ))}
      </Form>
    </div>
  );
};
export default FormComponent;
