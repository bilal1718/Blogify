import React from "react"
import { useDataContext } from './DataContext';
export default function Categories(){
  const { data } = useDataContext();
    return(
        <>
      <h1>Categories</h1>
      <div className="flex justify-center space-x-4 mb-4"> {/* Center the cards */}
          {data.map((post) => (
            <div key={post.title} className="max-w-[300px] max-h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <div className="max-h-[400px] overflow-y-auto">
              <a href="#">
                <img className="rounded-t-lg" src={post.urlToImage} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2l font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
                <a href={post.url} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
              </div>

            </div>
          ))}
        </div>
        </>
      );
    }




