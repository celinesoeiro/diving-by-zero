type Colors = 'neutral' | 'primary' | 'secondary' | 'dark' | 'light';

interface BagdeProps {
  label: string;
  color: Colors;
}

export const Bagde: React.FC<BagdeProps> = ({ label, color }) => {
  return (
    <span
      className={`
      inline-block 
      bg-${color} 
      rounded px-3 mt-5 py-1
      text-sm font-poppins font-semibold text-dark
      `}
    >
      {label}
    </span>
  );
};
