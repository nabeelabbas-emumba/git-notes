import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Paginator } from './components/paginator/paginator';
import { DataTable } from './components/dataTable/dataTable';
import { Gists } from './pages/gists/gists';
import { CreateGistForm } from './pages/createGistForm/createGistFrom';
import { AppRoutes } from './routes/routes';

function App() {
  return (
   <main className='ladding'>
    <Header></Header>
    <div className='landing-container'>
       <AppRoutes />
    </div>
   </main>
  );
}

export default App;
