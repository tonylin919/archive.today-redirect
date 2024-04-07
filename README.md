# archive.today-redirect UserScript

## Introduction

The **archive.today-redirect** UserScript is designed to enhance your browsing experience by automatically redirecting specified domains to their archived versions on archive.today. This script is particularly useful for bypassing paywalls, accessing content on websites that are no longer available, or preserving your privacy by viewing content through archive.today.

This script is compatible with browser extensions such as Tampermonkey, Violentmonkey, and Greasemonkey, enabling a seamless integration into your existing web browsing setup.

## Features

- **Automatic Redirection:** Configure domains to automatically redirect to their archived versions on archive.today.
- **Privacy Preservation:** Access content without directly visiting the original website, maintaining a higher degree of privacy.
- **Easy Configuration:** Easily add or remove domains from the redirection list as per your preferences.

## Installation

1. Ensure you have [Tampermonkey](https://www.tampermonkey.net/), [Violentmonkey](https://violentmonkey.github.io/), or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) installed in your browser.
2. Click on the raw version of the [`archive.today-redirect.user.js`](https://raw.githubusercontent.com/tonylin919/archive.today-redirect/main/archive.today-redirect.user.js) file in this GitHub repository.
3. Your Tampermonkey/Violentmonkey/Greasemonkey extension should prompt you to install the UserScript. Click "Install" to proceed.
4. Once installed, the script will automatically start working based on the configured domains.

## Usage

The script automatically works for the domains specified in the `@match` directives. Currently, it's set to work for a few domains including nytimes.com, barrons.com, fortune.com, and wsj.com.

To add or remove domains, edit the UserScript's `@match` and `@exclude` directives according to your needs. This requires a basic understanding of regular expressions and the match patterns.

## Contributing

Contributions to improve **archive.today-redirect** are welcome. Whether it's adding new features, fixing bugs, or enhancing documentation, your help is appreciated. Please fork the repository, make your changes, and submit a pull request for review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
