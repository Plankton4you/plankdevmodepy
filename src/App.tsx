import React, { useEffect, useState } from 'react';
import { Menu, X, Download, Search } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [audio] = useState(new Audio('https://files.catbox.moe/ahkw21.mp3'));
  const [currentSection, setCurrentSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    audio.play().catch(error => console.log('Audio autoplay failed:', error));
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const roles = ['DEVELOPER', 'PROGRAMMERS', 'ETHICAL HACKING', 'ENGINEER', 'DESIGNER'];

  const products = [
    { name: 'VPS / SERVER', price: 'Starting from $10/month' },
    { name: 'ALL SCRIPT BOT', price: 'Custom pricing' },
    { name: 'DOMAIN', price: 'Starting from $12/year' },
    { name: 'PANEL', price: 'Starting from $5/month' },
    { name: 'APK SADAP', price: 'Contact for pricing' },
    { name: 'APK RANSOM', price: 'Contact for pricing' },
    { name: 'FILE BASE WA SUPPORT', price: 'Starting from $20' },
    { name: 'NOKOS', price: 'Contact for pricing' }
  ];

  const scripts = [
    { name: 'ZORO 6.1 PRO [NO ENC]', url: 'https://www.mediafire.com/file/o3ov9hdhn1c4tc2/ZORO_6.1%25E2%2580%2594PRO_%255B_NO_ENC_%255D.zip/file' },
    { name: 'ZORO 6.1 PRO [NO ENC] - Alternative', url: 'https://www.mediafire.com/file/o3ov9hdhn1c4tc2/ZORO_6.1%25E2%2580%2594PRO_%255B_NO_ENC_%255D.zip/file' },
    { name: 'X-WZXTEAM V2 GEN 1 ENC', url: 'https://www.mediafire.com/file/aa2ttx8cpcb1r26/𝐗-𝐖𝐙𝐗𝐓𝐄𝐀𝐌+𝐕𝟐+𝐆𝐄𝐍+𝟏++𝐄𝐍𝐂.zip/file' },
    { name: 'Base-botwa-new', url: 'https://www.mediafire.com/file/rpor0xh5vkqlwop/Base-botwa-new.zip/file' },
    { name: 'DeftonesX V1 ENC', url: 'https://www.mediafire.com/file/b72gyak13jakcgw/𝙳𝚎𝚏𝚝𝚘𝚗𝚎𝚜𝚇+𝚅𝟷+𝙴𝙽𝙲.zip/file' }
  ];

  const videos = [
    'https://files.catbox.moe/lu1je3.mp4',
    'https://files.catbox.moe/bxezej.mp4',
    'https://files.catbox.moe/9bugyh.mp4',
    'https://files.catbox.moe/dam57o.mp4',
    'https://files.catbox.moe/61yf64.mp4',
    'https://files.catbox.moe/o489jb.mp4',
    'https://files.catbox.moe/19b51l.mp4',
    'https://files.catbox.moe/vk08su.mp4'
  ];

  const apis = [
    { name: 'OpenAI GPT-3.5', token: 'sk-...', description: 'AI language model API' },
    { name: 'Google Cloud Vision', token: 'AIza...', description: 'Image recognition API' },
    { name: 'OpenWeatherMap', token: 'b1b15e88fa797225412429c1c50c122a1', description: 'Weather data API' },
    { name: 'NASA API', token: 'DEMO_KEY', description: 'Space and astronomy data' },
    { name: 'News API', token: '38a6a52b3d414c45a11f4a187e6be67d', description: 'Global news articles' },
    { name: 'MovieDB', token: '3e7751f0c8c247c6ac4f180439098c06', description: 'Movie and TV show data' },
    { name: 'Giphy', token: 'dc6zaTOxFJmzC', description: 'GIF search and upload' },
    { name: 'PixaBay', token: '15039616-d79d4aaa8890e9898a5b6d5e7', description: 'Free stock images' },
    { name: 'CoinGecko', token: 'free', description: 'Cryptocurrency data' },
    { name: 'Football-Data', token: '9c4548ad43d644d6a152d6c0f2c7ade7', description: 'Soccer statistics' }
  ];

  const filteredApis = apis.filter(api => 
    api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    api.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    switch(currentSection) {
      case 'scripts':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Script Bot Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scripts.map((script, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {script.name}
                  </h3>
                  <a
                    href={script.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'api':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Free API Collection
            </h2>
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApis.map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {api.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{api.description}</p>
                  <div className="bg-gray-900 p-2 rounded-md">
                    <code className="text-green-400">{api.token}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Content Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                >
                  <video
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'guide':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              API Usage Guide
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Getting Started
                </h3>
                <p className="text-gray-300 mb-4">
                  To use any of our APIs, follow these simple steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Choose an API from our collection</li>
                  <li>Copy the API token</li>
                  <li>Include the token in your API request header</li>
                  <li>Make your API request using fetch or axios</li>
                </ol>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Example Usage
                </h3>
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code className="text-green-400">
{`fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Welcome to Plankton4You.Dev
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                <Typewriter
                  options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Our Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                      {product.name}
                    </h3>
                    <p className="text-gray-400">{product.price}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-16 text-center">
              <div className="text-2xl font-bold mb-8">
                <Typewriter
                  options={{
                    strings: ['MENERIMA JASA APAPUN DENGAN CODING DAN EDITING ATAU DESAIN'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </section>

            <section id="contact" className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Contact Me
              </h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/628881382817"
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +628881382817
                </a>
                <a
                  href="https://wa.me/6283824299082"
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +6283824299082
                </a>
                <a
                  href="https://whatsapp.com/channel/0029Vay9jnG65yDFJDN6tG1j"
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Channel
                </a>
                <a
                  href="https://www.instagram.com/plankton4you.dev"
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-black py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            PLANKTON4YOU.DEV
          </span>
        </div>
      </div>

      <header className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center">
          <img src="https://files.catbox.moe/98ma2n.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white p-2 hover:bg-gray-800 rounded-lg"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </header>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-900 p-4 shadow-lg z-50"
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            <X />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  setCurrentSection('home');
                  setIsSidebarOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentSection('scripts');
                  setIsSidebarOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg"
              >
                Script Bot
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentSection('api');
                  setIsSidebarOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg"
              >
                API
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentSection('content');
                  setIsSidebarOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg"
              >
                Content
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentSection('guide');
                  setIsSidebarOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg"
              >
                API Guide
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>

      <main className="container mx-auto px-4 py-16">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;