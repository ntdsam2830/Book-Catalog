import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const BookInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [book, setBook] = useState("");

  const { id } = useParams();

  // getProductData
  const getBookData = async () => {
    setLoading(true);
    try {
      const bookTemp = await getDoc(doc(fireDB, "books", id));
      setBook(bookTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
        {loading ? (
          <>
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          </>
        ) : (
          <>
            <div className="max-w-6xl px-4 mx-auto">
              <div className="flex flex-wrap mb-24 -mx-4">
                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                  <div className="">
                    <div className="">
                      <img
                        className=" w-full lg:h-[39em] rounded-lg"
                        src={book?.bookImageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="lg:pl-20">
                    <div className="mb-6 ">
                      <h1 className="max-w-xl mb-5 text-2xl font-semibold leading-loose tracking-wide text-black-700 md:text-2xl dark:text-gray-300">
                        {book?.name}
                      </h1>

                      <div>
                        <p className="inline-block mb-5 text-xl font-regular text-gray-700 dark:text-gray-300 ">
                          Rating: <span>{book?.rating}</span>
                        </p>
                      </div>

                      <p className="inline-block mb-5 text-xl font-regular text-gray-700 dark:text-gray-300 ">
                        Publish:{" "}
                        <span>
                          {book?.publish} by{" "}
                          <span className="text-blue-400">{book?.authors}</span>
                        </span>
                      </p>

                      <div>
                        <p className="inline-block text-xl font-regular text-gray-700 dark:text-gray-300 ">
                          Genre: <span>{book?.category}</span>
                        </p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                        Description :
                      </h2>
                      <p>{book?.desc}</p>
                    </div>

                    <div className="mb-6 " />
                    <div className="flex flex-wrap items-center mb-6">
                      <button className="w-full px-4 py-3 text-center text-indigo-600 bg-indigo-100 border border-indigo-600  hover:bg-indigo-600 hover:text-gray-100 rounded-xl">
                        Add to favorite list
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default BookInfo;
