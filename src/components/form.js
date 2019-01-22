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
  handleSubmit() {
  console.log(this.email)
    axios
      .post("https://minderenvoorkinderen.decoco.nl/api/users", {
        client_id: 1,
        client_secret: "5C6r0KLA4RIhVFQSOf75GcZzDzJ1pZCOg46gEhKI",
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return <div style={{ display: "flex", width: "400px", margin: "50px auto", flexDirection: "column" }}>
      <Form onSubmit={this.handleSubmit.bind(this)}>
        {({ formProps } ) => <form {...formProps} >
          <Field
            name="email"
            label="Email"
            isRequired>
            {({ fieldProps: { email } }) => <TextField type="email" name="email"
              label="Email"
              refs='email' email={email} />}
          </Field>
          <Field
            name="password"
            label="Password"
            defaultValue=""
            isRequired>
            {({ fieldProps }) => <TextField type='password' refs='password' {...fieldProps} />}
          </Field>
          <Button type="submit" appearance="primary">
            Submit
              </Button>
        </form>}
      </Form>
    </div>
  }
}


