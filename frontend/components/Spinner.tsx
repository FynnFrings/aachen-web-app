import MainSkeleton from "./SpinnerSkeletons/mainSkeleton";

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
					<MainSkeleton />
					<MainSkeleton />
					<MainSkeleton />
				</div>
			</div>
		</>
	);
};

export default Spinner;
