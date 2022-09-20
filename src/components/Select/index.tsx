interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  buttonLabel: string;
  onClick: () => void;
}

export const Select: React.FC<SelectProps> = ({ options, buttonLabel, onClick, ...props }) => {
  return (
    <div className="flex flex-row gap-0 w-full">
      <select
        className="
        border-dark border-2 rounded-l
        text-dark text-sm
        font-poppins font-semibold
        block w-full 
        p-2 
        bg-neutral
        transition ease-in-out
        focus:ring-dark 
        focus:border-dark
        focus:outline-none
      "
        {...props}
      >
        <>
          <option value="random" className="text-sm capitalize font-poppins font-semibold">
            Filter by category
          </option>

          {options.map((opt) => (
            <option value={opt} key={opt} className="text-sm capitalize font-poppins font-semibold">
              {opt}
            </option>
          ))}
        </>
      </select>

      <button onClick={onClick} className="bg-dark text-neutral p-2 border-2 border-dark rounded-r">
        {buttonLabel}
      </button>
    </div>
  );
};
