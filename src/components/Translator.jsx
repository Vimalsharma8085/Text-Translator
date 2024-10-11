import  { useState } from 'react';

const Translator = () => {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await fetch(`https://api.example.com/translate?source=${sourceLang}&target=${targetLang}&text=${encodeURIComponent(text)}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'YOUR_API_KEY',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
      });

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error('Error during translation:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Universal Language Translator</h1>
      <div className="mb-4">
        <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)} className="mr-2 p-2 border rounded">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          
        </select>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)} className="mr-2 p-2 border rounded">
          <option value="es">Spanish</option>
          <option value="en">English</option>
        
        </select>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate..."
        className="w-full p-2 border rounded mb-4"
        rows="4"
      />
      <button onClick={handleTranslate} className="bg-blue-500 text-white p-2 rounded">Translate</button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Translated Text:</h2>
        <p className="border p-2 rounded">{translatedText}</p>
      </div>
    </div>
  );
};

export default Translator;
