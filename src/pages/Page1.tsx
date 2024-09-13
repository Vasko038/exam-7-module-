import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateItem } from "../store/slices/Page1Slice";
import { AppDispatch, RootState } from "../store/Store";
import { Button, Drawer, Form, Input, message, Typography } from "antd";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { ICompany } from "../types";
import { v4 as uuidv4 } from "uuid";
function Page1() {
  const TableData = useSelector((state: RootState) => state.page1.data);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();
  const showEditDrawer = (id: string) => {
    setSearchParams({ edit: "true", id: id });
    const item = TableData.find((item) => item.id === id);
    if (item)
      form.setFieldsValue({
        title: item.title,
        image: item.image,
        desc: item.desc,
        webSite: item.webSite,
      });
  };

  const showAddDrawer = () => {
    setSearchParams({ add: "true" });
  };

  const onClose = () => {
    setSearchParams({});
    form.resetFields();
  };

  const isEditOpen = searchParams.get("edit") === "true";
  const isAddOpen = searchParams.get("add") === "true";

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteItem(id));
      message.success("successful");
    },
    [dispatch]
  );
  function onFinish(values: Omit<ICompany, "id">) {
    const id: string | null = searchParams.get("id");
    if (isEditOpen) {
      const item: ICompany = {
        id: searchParams.get("id"),
        ...values,
      };
      console.log(item.id, values);
      dispatch(updateItem(item));
    } else if (isAddOpen) {
      const Item: ICompany = {
        id: uuidv4(),
        ...values,
      };
      dispatch(addItem(Item));
    }
    message.success("successful");
  }
  const [form] = useForm();
  return (
    <div className="p-[20px]">
      <div className="flex p-[10px] bg-white rounded-lg justify-between items-center my-5">
        <Typography.Title level={3} className="!m-0">
          All Company
        </Typography.Title>
        <Button onClick={showAddDrawer} type="primary" size="large">
          Add
        </Button>
      </div>
      <div className="flex flex-col p-[10px] rounded-lg mt-5">
        <Typography.Title rootClassName="mb-5" level={4} className="block">
          Table
        </Typography.Title>
        <div className="">
          <div className="grid items-center grid-cols-6 gap-4 px-3 py-4 mb-3 bg-white rounded-lg shadow-lg">
            <Typography.Text>No_</Typography.Text>
            <Typography.Text>Image</Typography.Text>
            <Typography.Text>Name</Typography.Text>
            <Typography.Text>Description</Typography.Text>
            <Typography.Text className="text-center">Web Site</Typography.Text>
            <Typography.Text className="text-center">Action</Typography.Text>
          </div>
          <div className="!h-[500px] overflow-auto">
            {TableData.map((item, index) => (
              <div className="grid items-center grid-cols-6 gap-4 px-3 py-4 mb-3 bg-white rounded-lg shadow-lg">
                <Typography.Text>{index}</Typography.Text>
                <img
                  className="w-[50px] aspect-square rounded-lg shadow "
                  src={item.image}
                  alt="imageNot"
                />
                <Typography.Title level={4}>{item.title}</Typography.Title>
                <Typography.Text>{item.desc}</Typography.Text>
                <a className="text-center text-cyan-600" href={item.webSite}>
                  click me
                </a>
                <div className="flex justify-center gap-4">
                  <Button
                    className="text-white bg-red-500"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="text-white bg-yellow-600"
                    color="fsd"
                    onClick={() => showEditDrawer(item.id)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Drawer
        title={isEditOpen ? "Edit Item" : "Add Item"}
        open={isAddOpen || isEditOpen}
        onClose={onClose}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Title"
            name={"title"}
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input placeholder="Enter title"></Input>
          </Form.Item>

          <Form.Item
            label="Image"
            name={"image"}
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input placeholder="Enter image link"></Input>
          </Form.Item>

          <Form.Item
            label="desc"
            name={"desc"}
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input placeholder="Enter description"></Input>
          </Form.Item>

          <Form.Item
            label="Website link"
            rules={[{ required: true, message: "Please input!" }]}
            name={"webSite"}
          >
            <Input placeholder="Enter Website Link"></Input>
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            onSubmit={() => {
              form.submit();
            }}
          >
            Save
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default Page1;
