import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button } from "antd";
import "./createGistForm.scss";

interface GistFormValues {
  description: string;
  filename: string;
  content: string;
}

export const CreateGistForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<GistFormValues>({
    defaultValues: {
      description: "",
      filename: "",
      content: "",
    },
  });

  const onSubmit = (values: GistFormValues) => {
    console.log("Form submitted:", values);
    reset();
  };

  return (
    <>
      <div className="text">Create Gist</div>
      <Form
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        className="gist-form"
      >
        {/* Gist Description */}
        <Form.Item>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Gist Description"
                className="gist-input"
              />
            )}
          />
        </Form.Item>

        {/* Filename */}
        <Form.Item>
          <Controller
            name="filename"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Filename including extension..."
                className="gist-input"
              />
            )}
          />
        </Form.Item>

        {/* Content */}
        <Form.Item>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Write your code here..."
                rows={8}
                className="gist-textarea"
              />
            )}
          />
        </Form.Item>

        {/* Actions */}
        <div className="gist-actions">
          <Button className="add-btn">Add file</Button>
          <Button type="primary" htmlType="submit" className="gist-btn">
            Create Gist
          </Button>
        </div>
      </Form>
    </>
  );
};
