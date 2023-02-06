const Todo = (props) => {
  return (
    <tr>
      <td> {props.name} </td>
      <td>
        {" "}
        <button onClick={props.handleOnClick}>{props.status}</button>{" "}
      </td>
      <td>
        {" "}
        <button onClick={props.handleDelete}>削除</button>{" "}
      </td>
      <td>
        {" "}
        <button onClick={props.handleUp}>↑</button>{" "}
      </td>
      <td>
        {" "}
        <button onClick={props.handleDown}>↓</button>{" "}
      </td>
    </tr>
  );
};

export default Todo;
