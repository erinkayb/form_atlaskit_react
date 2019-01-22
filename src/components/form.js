import React, { Component } from "react"
import TextField from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import Form, { Field } from "@atlaskit/form"
import axios from 'axios'

export default class MyForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return <div style={{ display: "flex", width: "400px", margin: "50px auto", flexDirection: "column" }}>
      <Form onSubmit={data => {
        console.log('form data', data);
        this.setState({email: data.email, password: data.password})
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
          axios
            .post("https://minderenvoorkinderen.decoco.nl/api/users", JSON.stringify({
              client_id: 1,
              client_secret: "5C6r0KLA4RIhVFQSOf75GcZzDzJ1pZCOg46gEhKI",
              email: this.state.email,
              password: this.state.password,
            }))
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error.response)
            })
        );
      }}>
        {({ formProps } ) => <form {...formProps} >
          <Field
            name="email"
            label="Email"
            defaultValue=""
            isRequired>
            {({ fieldProps }) => <TextField type='email' ref='email' {...fieldProps} />}
          </Field>
          <Field
            name="password"
            label="Password"
            defaultValue=""
            isRequired>
            {({ fieldProps }) => <TextField type='password' ref='password' {...fieldProps} />}
          </Field>
          <Button type="submit" appearance="primary">
            Submit
              </Button>
        </form>}
      </Form>
    </div>
  }
}


