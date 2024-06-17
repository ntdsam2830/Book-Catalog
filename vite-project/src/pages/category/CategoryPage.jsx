import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const CategoryPage = () => {
  const { categoryname } = useParams();

  const context = useContext(myContext);
  const { getAllBook, loading } = context;

  const navigate = useNavigate();

  // filter book
  const filterBook = getAllBook.filter((obj) =>
    obj.category.includes(categoryname)
  );
  return (
    <Layout>
      <div className="mt-10">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600 body-font">
            {/* main 2 */}
            <div className="container px-5 py-5 mx-auto">
              {/* main 3  */}
              <div className="flex flex-wrap -m-4">
                {filterBook.length > 0 ? (
                  <>
                    {filterBook.map((item, index) => {
                      const { id, name, authors, publish, bookImageUrl } = item;
                      return (
                        <div key={index} className="p-4 w-full md:w-1/4">
                          <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                            <img
                              onClick={() => navigate(`/bookinfo/${id}`)}
                              className="lg:h-80  h-96 w-full"
                              src={bookImageUrl}
                              alt="img"
                            />
                            <div className="p-6">
                              <h1 className="name-font text-lg font-semibold text-gray-900 mb-3">
                                {name.substring(0, 25)}
                              </h1>
                              <h1 className="name-font text-m font-medium text-gray-900 mb-3">
                                {authors}
                              </h1>
                              <h2 className="text-s name-font font-medium text-gray-600 mb-3">
                                Publish: {publish}
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
                  </>
                ) : (
                  <div>
                    <div className="flex justify-center">
                      <img
                        className=" mb-2"
                        src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-black text-xl">
                      No {categoryname} book found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
