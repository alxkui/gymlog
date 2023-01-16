export default function Editable({ onChange, placeholder, type, value }: any) {
    const width = type === "text" ? "30" : "10";
    const styles = `border-grey-200 border-solid border rounded-md p-1 mx-2 w-${width}`;

    return (
      <input
        className={styles}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )
  }
  