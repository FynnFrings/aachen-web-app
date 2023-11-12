import { FC } from "react";

interface Props {
	count: string;
	category: string;
}

const ReviewCard: FC<Props> = ({ count, category }) => {
	return (
		<>
			<div className="w-full py-8 bg-[#383833]  rounded-2xl lg:flex lg:flex-col lg:justify-center lg:items-center">
				<p className="text-4xl text-[#FAC520] font-medium">{count}</p>
				<p className="text-2xl font-normal">{category}</p>
			</div>
		</>
	);
};

export default ReviewCard;
