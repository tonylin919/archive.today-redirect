import { universalXmlHttpRequest } from "./universalXmlHttpRequest";

(async function () {
	"use strict";

	/**
	 * Fetches the redirected URL from the archive page.
	 * @param url The URL to fetch the archived version for.
	 * @returns A promise that resolves to the redirected URL or the original URL if no redirect is found.
	 */
	async function fetchRedirectUrl(url: string): Promise<string> {
		return universalXmlHttpRequest({
			method: "GET",
			url: url,
		}).then(response => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(response.responseText, "text/html");
			const firstLink = doc.querySelector('a[style="text-decoration:none"]');
			if (firstLink instanceof HTMLAnchorElement) {
				return firstLink.href;
			} else {
				return url;
			}
		}).catch(error => {
			console.error("Failed to fetch redirect URL:", error);
			return url;
		});
	}

	// Clears search and hash from the current URL
	const url = new URL(window.location.href);
	url.search = "";
	url.hash = "";
	const currentUrl = url.toString();

	// Check if the current URL is an archive page
	if (currentUrl.startsWith("https://archive.ph/")) {
		// Attempt to find the first link in the specified element and redirect to it
		const firstLink = document.querySelector('div[class="TEXT-BLOCK"] > a') as HTMLAnchorElement | null;
		if (firstLink && firstLink.href) {
			window.location.replace(firstLink.href);
		}
	} else {
		// Encode the URL to avoid issues with special characters
		const encodedUrl = encodeURIComponent(currentUrl);
		// Construct the URL for the archive version of the page
		const archiveUrl = `https://archive.ph/${encodedUrl}`;
		// Perform the redirect to the archived URL
		fetchRedirectUrl(archiveUrl).then(redirectUrl => {
			if (redirectUrl) {
				window.location.replace(redirectUrl);
			}
		});
	}
})();