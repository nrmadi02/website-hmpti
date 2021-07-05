export default function TextareaInput({
	label,
	placeholder,
	value,
	nama,
	onChange,
}) {
	return (
		<div className='flex flex-col'>
			<label className='mb-2 font-bold text-sm text-gray-600'>{label}</label>
			<textarea
				className='h-40 focus:outline-none focus:shadow-lg focus:ring-0 border-none rounded-md shadow-sm p-2 px-4 font-bold placeholder-gray-300 text-gray-400'
				placeholder={placeholder}
				spellCheck='false'
				name={nama}
				// defaultValue={value}
				value={value ? value : ""}
				onChange={onChange}
			/>
		</div>
	);
}
