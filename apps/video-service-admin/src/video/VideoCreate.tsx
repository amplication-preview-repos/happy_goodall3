import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const VideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Create>
  );
};
