"use client";

import { updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

export default function UpdateUserPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const resData = await updateUser({
      name: data.name,
    })
    console.log(resdata);
    // Conclvert FormData to plain object


    alert("Form submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6">
      <Surface className="w-full min-w-[380px]">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Description>Update your profile information.</Description>
            <Fieldset.Group>
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }

                  return null;
                }}
              >
                <Label>Name</Label>
                <Input placeholder="John Doe" variant="secondary" />
                <FieldError />
              </TextField>


            </Fieldset.Group>
            <Fieldset.Actions>
              <Button type="submit">
                <FloppyDisk />
                Save changes
              </Button>
              <Button type="reset" variant="tertiary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
}