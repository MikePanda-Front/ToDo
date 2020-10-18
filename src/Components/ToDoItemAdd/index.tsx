import React, { FunctionComponent } from "react";
import { Input, Button, Form, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AddEventRequest } from "../../Ducks/Events/actions";
import { IEvent } from "../../Ducks/Events/reducer";
import { ApplicationState } from "../../Store/rootReducer";
import { InputWrapper } from "./styles";

interface StateProps {
  loading: boolean;
}

const EventItem: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const { loading } = useSelector<ApplicationState, StateProps>((state) => ({
    loading: state.events.loading,
  }));

  const onSubmit = async () => {
    form.submit();
  };

  const onFinish = async (data: IEvent) => {
    dispatch(AddEventRequest(data));
    history.goBack();
  };

  return (
    <Form form={form} onFinish={onFinish} className="row_padding">
      <InputWrapper>
        <Row justify="start" align="middle" gutter={[8, 8]} className="margin_top">
          <Col span={10}>
            <Form.Item name={"name"} className="input">
              <Input placeholder="name" />
            </Form.Item>
          </Col>
        </Row>
        <Row align="middle" gutter={[8, 8]}>
          <Col span={24}>
            <Form.Item name={"description"}>
              <Input.TextArea placeholder="description" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end" align="middle" gutter={[8, 8]}>
          <Col>
            <Button type="primary" onClick={onSubmit} loading={loading}>
              Save
            </Button>
          </Col>
        </Row>
      </InputWrapper>
    </Form>
  );
};

export default EventItem;
