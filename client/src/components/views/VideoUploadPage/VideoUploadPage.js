import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import DropZone from "react-dropzone";

const { TextArea } = Input;
const { Title } = Typography;

const privateOptions = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];
const categoryOptions = [
  { value: 0, label: "Film & Animation" },
  { value: 1, label: "Autos & Vehicles" },
  { value: 2, label: "Music" },
  { value: 3, label: "Pets & Animals" },
];
function VideoUploadPage() {
  const [form, setForm] = useState({
    videoTitle: "",
    description: "",
  });
  const [privateFlag, setPrivateFlag] = useState(0);
  const [category, setCategory] = useState("Film & Animation");
  const { videoTitle, description } = form;
  const onChange = (e) => {
    console.log(`${e.target.name} and ${e.target.value}`);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onPrivateChange = (e) => {
    setPrivateFlag(e.target.value);
  };
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>
      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DropZone onDrop multiple maxSize>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: "3rem" }} />
              </div>
            )}
          </DropZone>
          <div>
            <img src alt />
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onChange} name="videoTitle" value={videoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onChange} name="description" value={description} />
        <br />
        <br />
        <select onChange={onPrivateChange}>
          {privateOptions.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <select onChange={onCategoryChange}>
          {categoryOptions.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
