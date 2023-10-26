const Nothing = ({ list_name }: { list_name: string }) => {
	return (
		<>
			<div className="text-white text-lg lg:text-2xl text-center">
				Leider es wurde keine {list_name} gefunden
			</div>
		</>
	);
};

export default Nothing;
