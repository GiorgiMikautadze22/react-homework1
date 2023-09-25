// function Button(props) {
//   const { text } = props;
//   return <button>{text || "text"}</button>;
// }
// export default Button;

function Button({ text }) {
  return <button>{text || "hello"}</button>;
}

export default Button;
