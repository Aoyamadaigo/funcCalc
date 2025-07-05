import { InputField } from "../atoms/InputField"; 
import { ErrorMessage } from "../atoms/ErrorMessage";

type Props = {
  value: string;
  error?: string | null;
  onClear: () => void;
};

export const FormulaInput = ({ value, error, onClear }: Props) => {
  return (
    <div className=" w-[350px]">
      <div className="flex flex-row items-center gap-3 mb-3">
        <InputField value={value} readOnly placeholder="関数式を入力（キーボード対応）" />
        <button
          onClick={onClear}
          className=" w-[70px]  py-2 bg-red-500 text-gray-200 text-sm rounded hover:bg-red-600"
        >
          削除
        </button>
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
