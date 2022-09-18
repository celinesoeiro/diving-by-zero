interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select
      className="
        rounded border-dark border-2 
        text-dark text-sm
        font-poppins font-semibold
        block w-1/2 
        p-2 
        transition ease-in-out
        focus:ring-dark 
        focus:border-dark
        focus:outline-none
      "
      {...props}
    >
      <>
        {options.map((opt) => (
          <option value={opt} className="text-sm capitalize font-poppins font-semibold">
            {opt}
          </option>
        ))}
      </>
    </select>
  );
};
