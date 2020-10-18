import React from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Input, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { TaskWrapper } from "./styles";
import { IEvent } from "../../Ducks/Events/reducer";
import { UpdateEvent, DeleteEvent } from "../../Ducks/Events/actions";

type EventProp = {
  event: IEvent;
};

const ToDoItem: React.FunctionComponent<EventProp> = ({ event }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const changeStatus = () => {
    dispatch(UpdateEvent({ ...event, isActive: !event.isActive }));
  };

  const deleteEvent = () => {
    dispatch(DeleteEvent(event.id));
  };

  return (
    <Form form={form}>
      <TaskWrapper>
        <div>
          <Checkbox onClick={changeStatus} defaultChecked={event.isActive} />
          <Input disabled={true} value={event.name} />
        </div>
        <div>
          <Link to={`/Edit/${event.id}`}>
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Link>
          <Button
            danger
            type="primary"
            shape="circle"
            onClick={deleteEvent}
            icon={<DeleteOutlined />}
          />
        </div>
      </TaskWrapper>
    </Form>
  );
};

export default ToDoItem;
