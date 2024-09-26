//Setting default paragraph for data
const setParagraph = (
  name: string,
  data: number | string | boolean | null,
  units?: string
) => {
  return (
    <p>
      {name}:{' '}
      <span>
        {data} {units ? units : ""}
      </span>
    </p>
  );
};
export default setParagraph;
