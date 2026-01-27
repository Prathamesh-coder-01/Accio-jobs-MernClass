import Option from "./Option";

function Question({ data }) {
  return (
    <>
      <h2>{data.question}</h2>

      {data.options.map((opt, i) => (
        <Option key={i} text={opt} />
      ))}
    </>
  );
}

export default Question;