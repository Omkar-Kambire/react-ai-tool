# 🤖 AI Chat Bot

A modern, responsive AI-powered chat application built with React and powered by Google's Gemini AI. Features a clean interface with dark/light mode support, conversation history, and syntax highlighting for code responses.

![AI Chat Bot](https://img.shields.io/badge/React-18.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, responsive design with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes for comfortable viewing
- 💬 **Real-time Chat**: Instant responses from Google's Gemini AI
- 📚 **Conversation History**: Browse and reuse previous questions
- 🎯 **Smart Formatting**: Automatic code syntax highlighting and markdown rendering
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🔒 **Secure**: Environment variables for API key protection
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Demo

🌐 **Live Demo**: [AI Chat Bot on Vercel](https://your-app-url.vercel.app)

## 📸 Screenshots

### Dark Mode Interface
The application features a sleek dark mode with a sidebar for conversation history and a main chat area with syntax-highlighted code responses.

### Light Mode Interface
Switch to light mode for a clean, bright interface that's easy on the eyes during daytime use.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) 18.0+
- **Build Tool**: [Vite](https://vitejs.dev/) 5.0+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.0+
- **AI Service**: [Google Gemini AI](https://ai.google.dev/)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown)
- **Syntax Highlighting**: [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- **Deployment**: [Vercel](https://vercel.com/)

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Omkar-Kambire/react-ai-tool.git
cd react-ai-tool
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

**Get your API key:**
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy and paste it into your `.env` file

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Add environment variable: `VITE_GEMINI_API_KEY`

3. **Deploy**: Vercel will automatically build and deploy your app

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**: Drag and drop the `dist` folder to [Netlify](https://netlify.com/)

3. **Set Environment Variables**: Add `VITE_GEMINI_API_KEY` in site settings

## 🎯 Usage

### Basic Chat
1. Type your question in the input field
2. Press Enter or click "Ask"
3. View the AI-generated response with proper formatting

### Using History
1. Previous questions appear in the left sidebar
2. Click any question to ask it again
3. Use the trash icon to delete specific history items
4. Clear all history with the main trash button

### Theme Switching
- Use the dropdown at the bottom-left to switch between Dark and Light modes
- Your preference is automatically saved

## 🏗️ Project Structure

```
react-ai-tool/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── components/
│   │   ├── Answers.jsx          # AI response rendering
│   │   ├── QuestionAnswer.jsx   # Chat message component
│   │   └── RecentSearch.jsx     # History sidebar
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                  # Main application
│   ├── App.css                  # Component styles
│   ├── constants.js             # API configuration
│   ├── helper.js                # Utility functions
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── .env                         # Environment variables
├── .env.example                 # Environment template
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Features in Detail

### Intelligent Response Formatting
- **Code Blocks**: Automatic syntax highlighting for multiple programming languages
- **Lists**: Bullet points and numbered lists are properly formatted
- **Markdown**: Full markdown support for rich text responses

### Conversation Management
- **Persistent History**: Questions are saved in localStorage
- **Smart Deduplication**: Duplicate questions are automatically removed
- **Quick Access**: Click any previous question to ask it again

### Performance Optimizations
- **Lazy Loading**: Components are loaded on demand
- **Chunk Splitting**: Optimized bundle sizes for faster loading
- **Responsive Design**: Efficient rendering across all screen sizes

## 🔒 Security Features

- **Environment Variables**: API keys are never exposed in the codebase
- **Input Validation**: User inputs are properly sanitized
- **Error Handling**: Graceful error management with user feedback

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style

- Use ES6+ features
- Follow React best practices
- Maintain consistent formatting with Prettier
- Write descriptive commit messages

## 🐛 Known Issues

- Large responses may take time to render with syntax highlighting
- Mobile keyboard may cover input field on some devices

## 📋 Roadmap

- [ ] Voice input/output support
- [ ] Export conversations to PDF/text
- [ ] Custom AI model selection
- [ ] Multi-language support  
- [ ] Real-time collaboration
- [ ] Plugin system for extensions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powering the chat responses
- [React](https://reactjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 📞 Support

If you have any questions or need help with setup, please:

- 🐙 GitHub Issues: [Create an issue](https://github.com/Omkar-Kambire/react-ai-tool/issues)
- 💬 Discussions: [Join the discussion](https://github.com/Omkar-Kambire/react-ai-tool/discussions)

---

<div align="center">

**Made with ❤️ by [Omkar Kambire](https://github.com/Omkar-Kambire)**

⭐ Star this repo if you found it helpful!

</div>
