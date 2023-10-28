import React from "react";
import Header from "./Components/header";
import Hero from "./Components/heroSection";
import About from "./Components/about";
import Footer from "./Components/footer";
import Contact from "./Components/contact";
import FeaturedPosts from "./Components/featured_posts"
import Subscription from "./Components/subscription";
import Faqs from "./Components/faqs";
import Categories from "./Components/Categories";
import DataProvider from "./Components/DataContext";

export default function App(){
  return(
    <DataProvider>
    <div>
      <Header />
       <Hero />
       <FeaturedPosts />
      <Categories />
      <Subscription />
     <Faqs />
      {/* <Contact />  */}
       {/* <About /> */}
      <Footer />
    </div>
    </DataProvider>
  );
}
