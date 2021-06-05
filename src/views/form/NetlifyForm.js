import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const NetlifyForm = () => (
  <div className="container-inner">
    <h1>Netlify Form</h1>
    <Form name="contact" method="POST" data-netlify="true">
      <Form.Field>
        <label>Your Name:
        <input type="text" name="name" /></label>

      </Form.Field>
      <Form.Field>
        <label>Your Email:
        <input type="email" name="email" /></label>

      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>

  </div>
)

export default NetlifyForm