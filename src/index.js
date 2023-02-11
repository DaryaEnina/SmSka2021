import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import { MainPage } from './pages/main';
import './index.css';
import {BookPage} from './pages/book';
import {Layout} from './layout';
import {LayoutMainPage} from './layout-main-page';
import {Rule} from './components/rule';
import {Contract} from './components/contract';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route element={<LayoutMainPage/>} >
                 <Route path='/' element={<Navigate to= '/books/all' />} />
                  <Route path='/books' element={<Navigate to= '/books/all' />} />
                 <Route path='/books/:category' element={<MainPage />} />
                 <Route path='/rule' element={<Rule/>} />
                 <Route path='/contract' element={<Contract/>} />
              </Route>
              <Route path='/books/:category/:bookId' element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
