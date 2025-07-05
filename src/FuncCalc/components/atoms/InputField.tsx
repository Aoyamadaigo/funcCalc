type Props = {
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({ value, placeholder, readOnly = false, onChange }: Props) => {
  return (
    <input
      className="w-full max-w-xl px-4 py-2 text-base rounded bg-white text-gray-800"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};
