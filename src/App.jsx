// App.jsx
import Home from "./pages/Home";
import { Analytics } from '@vercel/analytics/next';



export default function App() {
  return (
    <body>
      <Home/>
      <Analytics />
    </body>
  
  );
}