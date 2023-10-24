const MainSkeleton = () => {
	return (
		<div className="animate-pulse bg-[#22221f] flex flex-col justify-between w-full basis-full p-5 gap-y-5 rounded-lg">
			<div className="w-full">
				<div className="w-full h-44 object-cover rounded-lg bg-neutral-500 bg-opacity-75"></div>
			</div>
			<div className="h-9 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
			<div className="h-6 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
			<div className="h-28 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
			<div className="h-10 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
		</div>
	);
};

export default MainSkeleton;
