import React from 'react';
import {Route,Routes} from "react-router-dom";
import {HomePage,AboutPage,ContactusPage} from '../webPages/index';

 const  WebPageRouter=()=>{
  return (
      <Routes>
         <Route path='/' component={HomePage}/>
         <Route path='/about' component={AboutPage}/>
         <Route path='/contact' component={ContactusPage}/>
     </Routes>
  );
}

export default WebPageRouter;
