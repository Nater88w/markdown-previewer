import './App.css';
import Editor from './editor';
import {useState} from 'react';
import Previewer from './previewer';
function App() {
  const [text,setText]= useState('');
  
  return (
    <>
    <Editor set={setText} />
    <Previewer text = {text} />
    </>
  );
}

export default App;
