import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Input, Form, Row, Col } from "antd";
import { EditOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { useParams, useHistory } from "react-router-dom";

import { EditWrapper } from "./styles";
import { IEvent } from "../../Ducks/Events/reducer";
import { UpdateEvent } from "../../Ducks/Events/actions";
import { ApplicationState } from "../../Store/rootReducer";

type StateProps = {
  event: IEvent;
};

const ToDoItemEdit: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const { event } = useSelector<ApplicationState, StateProps>((state) => ({
    event: state.events.events.filter((event) => event.id.toString() === id)[0],
  }));

  const onSubmit = () => {
    form.submit();
    history.goBack();
  };

  const onFinish = (data: IEvent) => {
    dispatch(UpdateEvent({ ...data, id: +id }));
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="row_padding"
      initialValues={{
        isActive: event.isActive || false,
        name: event.name,
        description: event.description,
      }}
    >
      <EditWrapper>
        <Row justify="start" align="middle" gutter={[8, 8]}>
          <Col>
            <Form.Item name={"isActive"} valuePropName="checked">
              <Checkbox />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name={"name"}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row align="middle" gutter={[8, 8]}>
          <Col span={24}>
            <Form.Item name={"description"}>
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end" align="middle" gutter={[8, 8]}>
          <Col>
            <Button onClick={onSubmit} type="primary">
              Edit
            </Button>
          </Col>
        </Row>
      </EditWrapper>
    </Form>
  );
};

export default ToDoItemEdit;
