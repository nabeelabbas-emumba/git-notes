import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Paginator } from './components/paginator/paginator';
import { DataTable } from './components/dataTable/dataTable';
import { Gists } from './pages/gists/gists';
import { CreateGistForm } from './pages/createGistForm/createGistFrom';

function App() {
  return (
   <main className='ladding'>
    <Header></Header>
    <div className='landing-container'>
    <Gists></Gists>
    <CreateGistForm></CreateGistForm>
       {/* <Paginator currentPage={page}
        totalPages={10}
        hasNext={page < totalPages}
        hasPrev={page > 1}
        onPageChange={handlePageChange}
        loading={false} 
        className="custom-pagination"></Paginator> */}
    </div>
   </main>
  );
}

export default App;
