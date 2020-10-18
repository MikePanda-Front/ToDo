import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import ToDoItem from "../ToDoItem/ToDoItemEl";
import { IEvent } from "../../Ducks/Events/reducer";
import { FetchEvents } from "../../Ducks/Events/actions";
import { ApplicationState } from "../../Store/rootReducer";

import { TasksWrapper, LinkWrapper } from "./styles";

interface StateProps {
  events: IEvent[];
  loading: boolean;
}

const EventsList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { events, loading } = useSelector<ApplicationState, StateProps>((state) => ({
    events: state.events.events,
    loading: state.events.loading,
  }));

  React.useEffect(() => {
    !events.length && dispatch(FetchEvents());
  }, []);

  return (
    <TasksWrapper>
      {loading && !events.length ? (
        <Spin />
      ) : (
        <>
          {!!events.length && events.map((event) => <ToDoItem key={event.id} event={event} />)}
          <LinkWrapper>
            <Link to={`/Add`}>
              <Button type="primary" shape="circle" icon={<PlusOutlined />} loading={loading} />
            </Link>
          </LinkWrapper>
        </>
      )}
    </TasksWrapper>
  );
};

export default EventsList;
