
---

# Simple Next.js Navigation Project

Welcome to the **Simple Next.js Navigation Project**! This project demonstrates how to navigate between pages using the Next.js app router. It provides a basic setup with links to `Home`, `About`, `Contact` pages that use Next.js's built-in routing system.

## Project Overview

In this project, we will create a simple website with the following pages:

- **Home**
- **About**
- **Contact**

Each page will have its own component, and we'll be using the Next.js app router to manage navigation between these components.

## Features

- **App Router**: Using the `next/navigation` module, we can create links and handle navigation between pages.
- **Built-in Routing**: Pages are created using the `app` directory structure in Next.js, allowing for seamless navigation and data fetching.
- **TypeScript Support**: The project is configured with TypeScript to ensure strong typing and code consistency.

## Getting Started

### Prerequisites

1. **Node.js** (v14 or higher) - You can download it from the [official website](https://nodejs.org/).
2. **npm** or **yarn** - Comes bundled with Node.js, but you can also install it globally if needed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IqraAbdulQadir/simple-navigation.git
   ```
2. Navigate into the project directory:
   ```bash
   cd simple-navigation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. Open your browser and visit `http://localhost:3000` to see the project in action.
3. Use the navigation links (e.g., `Home`, `About`, `Contact`) to navigate between pages.

### Project Structure

- `pages/` - This is where our `Home`, `About`, and `Contact` pages are defined.
- `components` - This directory can contain reusable components like `Navbar`, `Footer`, etc.
- `app` - Next.js app router configuration for handling page routing.
- `styles` - Global CSS styles for the project.

## Code Structure

**`pages/`**
- `index.tsx` - The homepage component.
- `about/page.tsx` - The `About` page component.
- `contact/page.tsx` - The `Contact` page component.

**`app/`**
- `layout.tsx` - Main layout component that wraps our pages.
- `navbar.tsx` - Component for site navigation.
- `footer.tsx` - Component for the footer section.

## How to Navigate Between Pages

- **Links**: You can use the `Link` component provided by the Next.js app router to navigate between pages.
  ```jsx
  import Link from 'next/link';

  const HomePage = () => (
    <div>
      <h1>Welcome to Our Website</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );

  export default HomePage;
  ```
- **Programmatic Navigation**: You can also use `useRouter` from `next/navigation` to programmatically navigate between pages.
  ```jsx
  import { useRouter } from 'next/navigation';

  const SomeComponent = () => {
    const router = useRouter();

    const handleNavigate = () => {
      router.push('/about');
    };

    return (
      <button onClick={handleNavigate}>Go to About Page</button>
    );
  };
  ```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.
