const Nothing = ({ list_name }: { list_name: string }) => {
	return (
		<>
			<div className="text-white text-lg lg:text-2xl text-center">
				Es konnten keine {list_name} gefunden werden
			</div>
		</>
	);
};

export default Nothing;
