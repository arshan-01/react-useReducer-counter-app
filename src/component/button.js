function button(props) {
    let { action, title } = props;
    
  return (
    <button onClick={action}>{title}</button>

  );
}

export default button;
