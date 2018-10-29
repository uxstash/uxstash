import React from "react";
import { DragSource } from "react-dnd";

const Types = {
  ITEM: "article"
};

const itemSource = {
  beginDrag(props) {
    const item = { title: props.title, id: props.id };
    return item;
  },
  endDrag(props, monitor, component) {
    // TODO: handle null dropresult
    const stash = monitor.getDropResult();
    return props.handleDrop(props.title, stash.title);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Article extends React.Component {
  render() {
    const { isDragging, connectDragSource, title } = this.props;
    return connectDragSource(
      <div className={isDragging ? "article dragging" : "article"}>
        {title}}
      </div>
    );
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(Article);
