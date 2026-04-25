import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loader" />
          ) : (
            <Layout key="main">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Redirect all other routes to home since it's a one-page site now */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Layout>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
