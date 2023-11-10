import React, { useEffect, useState } from "react";
import style from "@/styles/news_carousel.module.scss";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import NewsCarouselCard from "./NewsCarouselCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const NewsCarousel = ({ news }: any) => {
	const [activeSlide, setActiveSlide] = useState(0);

	let totalSlides = news.length;
	const slide = (action: string) => {
		if (action === "next") {
			if (activeSlide < totalSlides - 1) {
				setActiveSlide((prevState) => prevState + 1);
			} else {
				setActiveSlide(0);
			}
		} else if (action === "prev") {
			if (activeSlide === 0) {
				setActiveSlide(totalSlides - 1);
			} else {
				setActiveSlide((prevState) => prevState - 1);
			}
		}
	};

	return (
		<div className={style.container}>
			<div className={style.slider}>
				<div
					className={`${style.arrow} ${style.prev}`}
					onClick={() => slide("prev")}
				>
					<AiOutlineLeft size={30} />
				</div>
				<div className={style.slides}>
					{news.map((item: any, index: number) => {
						return (
							<div
								key={`slide_${index}`}
								className={`${style.slide} ${
									index === activeSlide && style.active
								}
							${index === activeSlide + 1 && style.next}
							${index === activeSlide - 1 && style.prev}
							${activeSlide === 0 && index === totalSlides - 1 ? style.prev : ""}
							${activeSlide === totalSlides - 1 && index === 0 ? style.next : ""}`}
							>
								<NewsCarouselCard newsItem={item} />
							</div>
						);
					})}
				</div>
				<div
					className={`${style.arrow} ${style.next}`}
					onClick={() => slide("next")}
				>
					<AiOutlineRight size={30} />
				</div>
			</div>
			<div className={style.dot_markers_container}>
				{news.map((item: any, index: number) => {
					return (
						<GoDotFill
							key={index}
							className={`${style.dot} ${
								index === activeSlide && style.active_dot
							}
						`}
							size="12"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NewsCarousel;
