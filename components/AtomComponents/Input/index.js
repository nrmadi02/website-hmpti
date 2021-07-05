export default function Input({
	type,
	label,
	placeholder,
	value,
	nama,
	onChange,
	defaultValue,
	disabled,
}) {
	return (
		<div className='flex flex-col'>
			<label className='mb-2 font-bold text-sm text-gray-600'>{label}</label>
			<input
				type={type}
				className='disabled:opacity-50 focus:outline-none focus:shadow-lg focus:ring-0 border-none rounded-md shadow-sm p-2 px-4 font-bold placeholder-gray-300 text-gray-400'
				placeholder={placeholder}
				defaultValue={defaultValue}
				value={value}
				name={nama}
				onChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
}
