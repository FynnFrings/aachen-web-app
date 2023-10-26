const Nothing = ({ list_name }: { list_name: string }) => {
	return (
		<>
			<div className="text-white text-2xl">Leider es wurde keine {list_name} gefunden</div>
		</>
	);
};

export default Nothing;
