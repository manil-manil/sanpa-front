export default function CheckboxItem(data) {
  return (
    <div aria-checked>
      <input type="checkbox" id={data.name} name={data.name} />
      <label for={data.name}>{data.label}</label>
    </div>
  );
}
