import React from 'react'
import { Form, Label, Input, Button } from 'reactstrap'

export const FormOptions = () => {
    return (
        <Form>
            <Label for="exampleEmail">Email</Label>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Phone" />
            <Input type="text" placeholder="Address" />
            <Input type="text" placeholder="City" />
            <Button>Guardar</Button>
        </Form>
    )
}
