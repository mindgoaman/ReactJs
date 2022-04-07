import React from 'react';
import {Route,Routes} from "react-router-dom";
import {HomePage,AboutPage,ContactusPage,ErrorPage404} from '../webPages/index';

 const  WebPageRouter=()=>{

  return (
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/about' element={<AboutPage/>}/>
         <Route path='/contact' element={<ContactusPage/>}/>
         <Route path='/*' element={<ErrorPage404/>}/>
      </Routes>
  );

}

export default WebPageRouter;
