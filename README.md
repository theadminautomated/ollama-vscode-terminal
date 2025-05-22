# Ollama Auto Terminal VS Code Extension

This extension automatically opens a new terminal and runs `ollama run llama3.2` when activated.

## Features
- Opens a new terminal named "Ollama Llama3.2" on activation
- Runs `ollama run llama3.2` automatically in the terminal

## Requirements
- [Ollama](https://ollama.com/) must be installed and available in your system PATH
- The `llama3.2` model should be available for use

## Usage
1. Install and enable the extension in VS Code.
2. On activation (e.g., when VS Code starts or the extension is enabled), a new terminal will open and run the command automatically.

## Extension Settings
This extension does not contribute any settings.

## Known Issues
- The terminal will open every time the extension is activated.
- Make sure `ollama` is installed and accessible from your terminal.

## Release Notes
### 0.0.1
- Initial release: auto-runs `ollama run llama3.2` in a new terminal on activation.
