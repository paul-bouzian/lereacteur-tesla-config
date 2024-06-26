const ConfigButton = ({
  selectedOption,
  setSelectedOption,
  text,
  optionName,
  setTotalPrice,
  selectedVehicle,
  selectedColor,
}) => {
  return (
    <button
      className={`w-full border border-slate-300 rounded-full py-4 transition-all ${
        selectedOption === optionName ? " blue-focus font-bold" : ""
      }`}
      onClick={() => {
        setSelectedOption(optionName);
      }}
    >
      {text}
    </button>
  );
};

export default ConfigButton;
