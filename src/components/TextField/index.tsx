interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonLabel: string;
  onClick: () => void;
}

export const TextField: React.FC<TextFieldProps> = ({ buttonLabel, onClick, ...props }) => {
  return (
    <div className="flex flex-row gap-0 w-full">
      <input
        type="text"
        className="
          border-dark border-2 rounded-l
          block w-full 
          text-sm text-dark 
          font-poppins font-semibold
          bg-neutral
          transition ease-in-out
          focus:ring-dark 
          focus:outline-none
          focus:text-dark
          p-2
        "
        {...props}
      />

      <button onClick={onClick} className="bg-dark text-neutral p-2 border-2 border-dark rounded-r">
        {buttonLabel}
      </button>
    </div>
  );
};
