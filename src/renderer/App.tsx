import { Link } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to the App!</h1>
      <Link to="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </div>
  );
}
