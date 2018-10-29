import React from "react";
import { DropTarget } from "react-dnd";

const Types = {
  ITEM: "article"
};

const spec = {
  drop(props, monitor, component) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Stash extends React.Component {
  render() {
    const { connectDropTarget, title } = this.props;
    return connectDropTarget(<div className="stash">{title}</div>);
  }
}

export default DropTarget(Types.ITEM, spec, collect)(Stash);
