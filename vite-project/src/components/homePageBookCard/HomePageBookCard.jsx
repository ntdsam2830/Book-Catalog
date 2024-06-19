/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
// productData

const HomePageBookCard = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllBook } = context;

  return (
    <div className="mt-10">
      {/* Heading  */}
      <div className="">
        <h1 className=" text-center mb-5 text-2xl font-semibold">New Books</h1>
      </div>

      {/* main  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex flex-wrap -m-4">
            {getAllBook.slice(0, 8).map((item, index) => {
              const { id, name, authors, publish, bookImageUrl } = item;
              return (
                <div key={index} className="p-3 w-full md:w-1/4">
                  <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      onClick={() => navigate(`/bookinfo/${id}`)}
                      className="lg:h-80  h-96 w-full"
                      src={bookImageUrl}
                      alt="image"
                    />
                    <div className="p-6">
                      <h1 className="name-font text-lg font-semibold text-gray-900 mb-3">
                        {name.substring(0, 25)}
                      </h1>
                      <h1 className="name-font text-lg font-medium text-gray-900 mb-3">
                        {authors.substring(0, 25)}
                      </h1>
                      <h2 className="text-xs name-font font-medium text-gray-600 mb-3">
                        Publish:
                        {publish}
                      </h2>
                      <div className="flex justify-center ">
                        <button
                          onClick={() => navigate(`/bookinfo/${id}`)}
                          className=" bg-indigo-200 hover:bg-indigo-600 w-full text-white py-[4px] rounded-lg font-bold"
                        >
                          More details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageBookCard;
