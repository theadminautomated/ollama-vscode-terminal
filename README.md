# Ollama VS Code Terminal Extension

## Overview
This open source Visual Studio Code extension provides a robust, production-ready terminal profile for running [Ollama](https://ollama.com/) models directly from the VS Code integrated terminal. It is designed for reliability and ease of use in professional and development environments.

## Features
- **Terminal Profile:** Adds a terminal profile named `ollama` to the VS Code terminal dropdown. Selecting this profile automatically runs `ollama run llama3.2`.
- **Dependency Check:** On activation, the extension checks if `ollama` is installed. If not, it prompts the user to install it (using `winget` on Windows, or providing manual instructions if `winget` is unavailable).
- **Cross-Platform Support:** Designed to work on Windows, macOS, and Linux (installation prompt is Windows-specific, but the terminal profile is cross-platform).
- **Minimal and Reliable:** No unnecessary UI, notifications, or distractions. All prompts are actionable and relevant to the extension’s function.

## Requirements
- Visual Studio Code 1.100.0 or later
- [Ollama](https://ollama.com/) must be installed and available in your system PATH
- On Windows, [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) is used for automated installation if available

## Installation
### From the VS Code Marketplace
1. Search for `Ollama VS Code Terminal` in the Extensions Marketplace and install it.
2. On first activation, the extension will check for `ollama`. If not found, you will be prompted to install it.
3. After installation, open a new terminal in VS Code and select the `ollama` profile from the dropdown.

### From VSIX Package
1. Download the latest `.vsix` release from [GitHub Releases](https://github.com/theadminautomated/ollama-vscode-terminal/releases).
2. Install with: `code --install-extension ollama-0.0.1.vsix`

### From Source
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Press `F5` in VS Code to launch an Extension Development Host.

## Usage
- Open the VS Code integrated terminal.
- Select the `ollama` profile from the terminal dropdown.
- The terminal will automatically run `ollama run llama3.2`.

## Troubleshooting
- If `ollama` is not found and cannot be installed automatically, follow the manual installation instructions at [https://ollama.com/download](https://ollama.com/download).
- Ensure `ollama` is in your system PATH.
- For issues with the extension, check the VS Code output panel for logs.

## Contributing
Contributions are welcome. Please open issues or pull requests for bug fixes or feature requests.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Security
- No telemetry or data collection is performed.
- The extension only interacts with your local system to check and install `ollama`.

## Repository
[https://github.com/theadminautomated/ollama-vscode-terminal](https://github.com/theadminautomated/ollama-vscode-terminal)
