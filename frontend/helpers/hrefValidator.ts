const hrefValidator = (href: string | undefined): string => {
	// Check if the provided URL is empty or null.
	return href == "" || href == null
		? // If the URL is empty or null, return a fallback URL for a "404 Not Found" page.
		  "/404"
		: // If the URL starts with "www", it may be a relative URL. Prepend "http://" to make it an absolute URL.
		href.slice(0, 3) == "www"
		? "http://" + `${href}`
		: // If the URL doesn't require modifications, return it as-is.
		  `${href}`;
};

export default hrefValidator;
