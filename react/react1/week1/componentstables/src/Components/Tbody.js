function Tbody(props) {
  return (
    <tbody>
      <tr>
        <td>{props.descriptions}</td>
        <td>{props.deadlines}</td>
      </tr>
    </tbody>
  );
}

export default Tbody;
