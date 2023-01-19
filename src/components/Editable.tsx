export default function Editable({ onChange, placeholder, type, value}: any) {
    const width = type === "text" ? "30" : "12";
    const styles = `border-solid border rounded-md p-1 h-12 mx-2 w-${width}`;

    return (
      <input
        className={styles}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={type === "number" ? "[0-9]*" : ""}
        width=""
      />
    )
  }
  