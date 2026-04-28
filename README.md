# 🐉 Dragon News

Dragon News is a modern, responsive, and high-performance news portal built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. It features a clean user interface, real-time news updates via a marquee, category-based filtering, and a full-fledged authentication system.

## ✨ Features

- **🚀 Modern Tech Stack**: Built using the latest Next.js 16 (App Router) and React 19 for optimal performance.
- **🗞️ Breaking News**: A dynamic marquee displaying the latest headlines.
- **📂 Category Navigation**: Easily filter news articles by categories like Business, Sports, Entertainment, etc.
- **📱 Responsive Design**: Fully optimized for all screen sizes using Tailwind CSS 4 and DaisyUI 5.
- **👤 Authentication**: Secure user login and registration system.
- **📅 Dynamic Header**: Real-time date display and personalized greetings.
- **🔍 News Details**: In-depth view for each news article with social sharing and related content.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [React Fast Marquee](https://www.react-fast-marquee.com/)
- **Utilities**: `date-fns` for date formatting.

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahmudulhasanzb/Dragon-News.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd dragon-news
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
src/
├── app/               # Next.js App Router (Routes & Pages)
│   ├── (auth)/        # Authentication routes (Login, Register)
│   ├── (main)/        # Main app routes (Home, Category, News)
│   ├── layout.js      # Root layout
│   └── globals.css    # Global styles
├── components/        # Reusable UI components
│   ├── homepage/      # Components specific to the home page
│   └── shared/        # Shared components (Navbar, Header, etc.)
├── assets/            # Static assets (images, icons)
└── lib/               # Utility functions and configurations
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by [Mahmudul Hasan](https://github.com/mahmudulhasanzb)
