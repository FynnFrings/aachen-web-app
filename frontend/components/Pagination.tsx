import React from "react";
import styles from "../styles/pagination.module.scss";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const Pagination = ({ items, pageSize, currentPage, onPageChange }: any) => {
	const pagesCount = Math.ceil(items / pageSize);

	if (pagesCount === 1) return null;

	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	// Define the number of pages to show at a time
	const pagesToShow = 5;

	// Calculate the start and end indices for the pages to display
	const startIndex = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
	const endIndex = Math.min(startIndex + pagesToShow - 1, pagesCount);

	// Create a sliced array of pages to display
	const visiblePages = pages.slice(startIndex - 1, endIndex);

	return (
		<div className={styles.container}>
			<ul className={styles.pagination}>
				<li>
					<button
						className={styles.buttons}
						disabled={currentPage === 1}
						onClick={() => onPageChange(currentPage - 1)}
					>
						<SlArrowLeft />
					</button>
				</li>
				{visiblePages.map((page) => (
					<li
						onClick={() => onPageChange(page)}
						key={page}
						className={
							page === currentPage
								? styles.pageItemActive
								: styles.pageItem
						}
					>
						{page}
					</li>
				))}
				<li>
					<button
						className={styles.buttons}
						disabled={currentPage === pagesCount}
						onClick={() => onPageChange(currentPage + 1)}
					>
						<SlArrowRight />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
