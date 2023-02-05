const ToDo = (props) => {
  return (
    <div>
      <div>名前: {props.name}</div>
      <div>状態: {props.stat}</div>
    </div>
  );
};

export default ToDo;
