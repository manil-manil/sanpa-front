export default function NodeComponent(data: any) {
  console.log(data);
  return (
    <>
      <circle r="5"></circle>
      <text dx="23" dy="5" className="rd3t-label__title">
        {data.nodeDatum.name}
      </text>
      {data.nodeDatum.attributes != null && (
        <text dx="23" dy="25" className="rd3t-label__attributes">
          <tspan>{data.nodeDatum.attributes.percent} %</tspan>
        </text>
      )}
    </>
  );
}
