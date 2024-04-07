/**
 * Universal XMLHttpRequest Function for Userscripts
 *
 * This module provides a universal way to make XMLHttpRequests (XHR) in Userscripts,
 * abstracting over the differences between script managers like TamperMonkey and GreaseMonkey.
 * It supports both GM_xmlhttpRequest (used by TamperMonkey and older GreaseMonkey versions)
 * and GM.xmlHttpRequest (used by newer GreaseMonkey versions), choosing the appropriate
 * API based on runtime availability. This allows Userscripts to be more portable and
 * easier to maintain across different Userscript managers.
 *
 * Usage:
 *   Import and call `universalXmlHttpRequest` with request options similar to the standard
 *   XHR API. The function returns a promise that resolves with the response object.
 *
 * Example:
 *   universalXmlHttpRequest({ method: "GET", url: "https://example.com" })
 *     .then(response => console.log(response.responseText))
 *     .catch(error => console.error(error));
 *
 * @module universalXmlHttpRequest
 */

/**
 * Performs an XMLHttpRequest using the API available in the Userscript environment.
 *
 * @param {object} options - The request options, including method, url, headers, etc.
 * @returns {Promise<object>} A promise that resolves with the response object upon successful completion of the request.
 *                            The promise is rejected if the request fails or if neither XMLHttpRequest API is available.
 */
export async function universalXmlHttpRequest(options: any): Promise<any> {
	return new Promise((resolve, reject) => {
		// Check for GM_xmlhttpRequest availability (compatible with TamperMonkey and older GreaseMonkey versions)
		if (typeof GM_xmlhttpRequest !== "undefined") {
			GM_xmlhttpRequest(Object.assign({}, options, {
				onload: resolve,
				onerror: reject
			}));
		}
		// Check for GM.xmlHttpRequest availability (compatible with newer GreaseMonkey versions)
		else if (typeof GM !== "undefined" && typeof GM.xmlHttpRequest !== "undefined") {
			GM.xmlHttpRequest(Object.assign({}, options, {
				onload: resolve,
				onerror: reject
			}));
		}
		// If neither API is available, reject the promise with an error
		else {
			reject(new Error("XMLHttpRequest is not supported in this Userscript environment."));
		}
	});
};