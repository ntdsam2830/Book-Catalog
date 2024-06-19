import { useContext } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";

const Track = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllBook } = context;

  const filterBook = getAllBook.filter((obj) => obj.publish >= 2022);

  return (
    <div className="mt-10">
      {/* Heading  */}
      <div className="">
        <h1 className=" text-center text-2xl font-semibold">
          Recommended Books
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-10 md:py-10">
          <div className="flex justify-center ">{loading && <Loader />}</div>
          <div className="flex flex-wrap justify-evenly -m-4 ">
            {filterBook
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 1)
              .map((item, index) => {
                const { id, name, rating, bookImageUrl } = item;
                return (
                  <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                      <img
                        onClick={() => navigate(`/bookinfo/${id}`)}
                        className="lg:h-80  h-96 w-full"
                        src={bookImageUrl}
                        alt="image"
                      />
                      <div className="p-2">
                        <h2 className="title-font font-bold text-lg text-gray-900">
                          {name.substring(0, 50)}
                        </h2>
                        {/* <p className="leading-relaxed">{authors}.</p> */}
                        <h2 className="text-m name-font font-medium text-gray-600 mb-3 mt-2">
                          Rating:
                          {rating}
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

export default Track;
