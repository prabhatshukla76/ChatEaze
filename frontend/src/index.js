import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <ChakraProvider>
    <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
    </ChakraProvider>
     
    
);


