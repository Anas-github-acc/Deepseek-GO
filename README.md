# deepseek-go

deepseek-go is a Visual Studio Code extension that brings an AI-powered chatbot directly into your development environment. Powered by DeepSeek's deep reasoning model (R1) and with plans to integrate a fast, non-reasoning model in future updates, this extension is designed to help you quickly access insights, code suggestions, and general assistance without ever leaving VS Code.

## Features

- **Integrated Chatbot**: Engage with a chatbot right in your editor for coding help, debugging tips, and more.
- **Deep Reasoning Model (R1)**: Currently powered by DeepSeek's advanced deep reasoning model to provide context-aware and thoughtful responses.
- **Planned High-Performance Mode**: Future updates will introduce a non-reasoning model option for faster performance.
- **Seamless VS Code Experience**: Designed to work natively within VS Code, allowing you to remain focused on your code.

![Chatbot Demo](images/chatbot-demo.png)

## Requirements

- **Visual Studio Code**: Version 1.50.0 or later is recommended.
- **Internet Connection**: Required for accessing the DeepSeek models.
- **No Additional Dependencies**: All necessary functionality is included within the extension.

## Extension Settings

This extension contributes the following settings which can be customized in your VS Code settings:

- **`deepseek-go.enable`**: Enable or disable the deepseek-go extension.
- **`deepseek-go.model`**: Choose the model to use (default is `"R1"`). Future releases may include options like `"fast"` for the non-reasoning model.
- **`deepseek-go.apiKey`**: (Optional) Provide your API key if additional authentication is needed to access enhanced model capabilities.

## Known Issues

- **Model Limitation**: Currently, only the deep reasoning model (R1) is supported. Expect updates to include a high-performance non-reasoning model.
- **Performance Latency**: Some complex queries may experience slight delays.
- **Context Sensitivity**: Chatbot responses are generated based on the available training data and might sometimes miss nuanced context.

## Release Notes

### 1.0.0
- **Initial Release**: Introduced deepseek-go with integration of the DeepSeek deep reasoning model (R1) for comprehensive chatbot functionality.
- **Basic VS Code Integration**: Seamlessly integrated into the VS Code environment to assist with coding and debugging.

### 1.1.0 (Upcoming)
- **New Model Integration**: Introduction of a non-reasoning model for improved performance.
- **Performance Optimizations**: General bug fixes and improvements based on user feedback.

## Extension Guidelines

Before using deepseek-go, ensure you have updated to the latest version of Visual Studio Code and maintain a stable internet connection to fully leverage its capabilities. For any issues or feature requests, please check our [issue tracker](https://github.com/yourusername/deepseek-go/issues) or contribute directly.

## Working with Markdown in VS Code

You can easily edit and preview Markdown files in VS Code. Here are some useful shortcuts:

- **Split Editor**: Press `Cmd+\` (macOS) or `Ctrl+\` (Windows/Linux).
- **Toggle Preview**: Press `Shift+Cmd+V` (macOS) or `Shift+Ctrl+V` (Windows/Linux).
- **Markdown IntelliSense**: Press `Ctrl+Space` to view available Markdown snippets.

For more information:
- [Visual Studio Code's Markdown Support](https://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://www.markdownguide.org/basic-syntax/)

---

Enjoy using deepseek-go, and feel free to contribute to its ongoing development!
