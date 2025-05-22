# Ollama VS Code Terminal Extension

## Overview
This Visual Studio Code extension provides a robust, production-ready terminal profile for running [Ollama](https://ollama.com/) models directly from the VS Code integrated terminal. It is designed for reliability and ease of use in professional and development environments.

## Features
- **Terminal Profile:** Adds a terminal profile named `ollama` to the VS Code terminal dropdown. Selecting this profile automatically runs `ollama run llama3.2`.
- **Dependency Check:** On activation, the extension checks if `ollama` is installed. If not, it prompts the user to install it (using `winget` on Windows, or providing manual instructions if `winget` is unavailable).
- **Cross-Platform Support:** Designed to work on Windows, macOS, and Linux (installation prompt is Windows-specific, but the terminal profile is cross-platform).
- **No Fluff:** No unnecessary UI, notifications, or distractions. All prompts are actionable and relevant to the extension’s function.

## Requirements
- Visual Studio Code 1.100.0 or later
- [Ollama](https://ollama.com/) must be installed and available in your system PATH
- On Windows, [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) is used for automated installation if available

## Installation
1. Install this extension from the VS Code Marketplace or clone and build from source.
2. On first activation, the extension will check for `ollama`. If not found, you will be prompted to install it.
3. After installation, open a new terminal in VS Code and select the `ollama` profile from the dropdown.

## Usage
- Open the VS Code integrated terminal.
- Select the `ollama` profile from the terminal dropdown.
- The terminal will automatically run `ollama run llama3.2`.

## Troubleshooting
- If `ollama` is not found and cannot be installed automatically, follow the manual installation instructions at [https://ollama.com/download](https://ollama.com/download).
- Ensure `ollama` is in your system PATH.
- For issues with the extension, check the VS Code output panel for logs.

## Development
- Clone the repository.
- Run `npm install` to install dependencies.
- Press `F5` in VS Code to launch an Extension Development Host.
- The extension code is in `src/extension.ts`.

## License
This project is licensed under the MIT License.

## Security
- No telemetry or data collection is performed.
- The extension only interacts with your local system to check and install `ollama`.

## Contributing
Contributions are welcome. Please open issues or pull requests for bug fixes or feature requests.
