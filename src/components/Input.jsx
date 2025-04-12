function Input({
	inputType,
	inputName,
	inputClass,
	inputId,
	inputValue,
	inputRequired,
	labelClass,
	labelText,
	spanClass,
}) {
	return (
		<label className={labelClass} htmlFor={inputId}>
			<span className={spanClass}>{labelText}</span>
			<input
				type={inputType}
				className={inputClass}
				id={inputId}
				name={inputName}
				required={inputRequired}
				value={inputValue}
			/>
		</label>
	);
}

export default Input;
