// import MainSkeleton from "@/components/SpinnerSkeletons/mainSkeleton";

const Spinner = () => {
	return (
		<>
			<div className="flex flex-col gap-14 py-20">
				<div className="animate-pulse bg-neutral-500 bg-cover bg-opacity-75 w-full flex flex-col justify-center items-center gap-y-5 py-28 rounded-lg"></div>
				<div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between">
					<div className="animate-pulse w-2/6 bg-opacity-75 bg-neutral-500 rounded-lg h-14"></div>
					<div className="animate-pulse w-2/6 bg-opacity-75 bg-neutral-500 rounded-lg h-14"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
					<div className="animate-pulse bg-[#22221f] flex flex-col justify-between w-full basis-full p-5 gap-y-5 rounded-lg">
						<div className="w-full">
							<div className="w-full h-44 object-cover rounded-lg bg-neutral-500 bg-opacity-75"></div>
						</div>
						<div className="h-9 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-6 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-28 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-10 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
					</div>
					<div className="animate-pulse bg-[#22221f] flex flex-col justify-between w-full basis-full p-5 gap-y-5 rounded-lg">
						<div className="w-full">
							<div className="w-full h-44 object-cover rounded-lg bg-neutral-500 bg-opacity-75"></div>
						</div>
						<div className="h-9 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-6 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-28 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-10 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
					</div>
					<div className="animate-pulse bg-[#22221f] flex flex-col justify-between w-full basis-full p-5 gap-y-5 rounded-lg">
						<div className="w-full">
							<div className="w-full h-44 object-cover rounded-lg bg-neutral-500 bg-opacity-75"></div>
						</div>
						<div className="h-9 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-6 w-4/6 bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-28 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
						<div className="h-10 w-full bg-neutral-500 rounded-lg bg-opacity-75"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Spinner;
