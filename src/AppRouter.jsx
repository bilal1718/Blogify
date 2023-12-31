import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import App from './App';
import Blogs from './Components/blogs';
import Categories from './Components/Categories';
import Cardi from './Components/Card';
import Form from './Components/Form';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/categories" element={<Categories/>} /> */}
          <Route path="/category/:category" element={<Cardi/>} />
          <Route path="/category/blog" element={<Cardi/>} />
          <Route path="/sign-up" element={<Form />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
