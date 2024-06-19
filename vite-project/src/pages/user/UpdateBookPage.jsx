/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: "Business & Economics",
  },
  {
    name: "Self-Help",
  },
  {
    name: "Science & Technology",
  },
  {
    name: "Sci-Fi & Fantasy",
  },
  {
    name: "Literature & Fiction",
  },
  {
    name: "History",
  },
  {
    name: "Comics",
  },
  {
    name: "Biographies & Memoirs",
  },
  {
    name: "Romance",
  },
  {
    name: "Children",
  },
  {
    name: "Education & Teaching",
  },
];

const UpdateBookPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllBookFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // book state
  const [book, setBook] = useState({
    name: "",
    desc: "",
    authors: "",
    publish: "",
    bookImageUrl: "",
    category: "",
    rating: "",
    ISBN: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single book Function
  const getSingleBookFunction = async () => {
    setLoading(true);
    try {
      const bookTemp = await getDoc(doc(fireDB, "books", id));
      //   console.log(book.data())
      const book = bookTemp.data();
      setBook({
        name: book?.name,
        desc: book?.desc,
        authors: book?.authors,
        publish: book?.publish,
        bookImageUrl: book?.bookImageUrl,
        category: book?.category,
        rating: book?.rating,
        ISBN: book?.ISBN,
        time: book?.time,
        date: book?.date,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Add book Function
  const updateBookFunction = async () => {
    //validation
    if (book.name.length >= 100) {
      return toast.error("Book title must be less than 100 characters.");
    } else if (book.publish < 1800 || book.publish > 2024) {
      return toast.error("Invalid publish year");
    } else if (book.rating < 0 || book.rating > 10) {
      return toast.error("Invalid rating");
    }
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "books", id), book);
      toast.success("Book updated successfully");
      getAllBookFunction();
      setLoading(false);
      navigate("/user-dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Book updated failed");
    }
  };

  useEffect(() => {
    getSingleBookFunction();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-indigo-50 px-8 py-6 border border-indigo-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-indigo-500 ">
              Update Book
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={book.name}
              onChange={(e) => {
                setBook({
                  ...book,
                  name: e.target.value,
                });
              }}
              placeholder="Book Title"
              className="bg-indigo-50 border text-indigo-300 border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="author"
              value={book.authors}
              onChange={(e) => {
                setBook({
                  ...book,
                  authors: e.target.value,
                });
              }}
              placeholder="Book Authors"
              className="bg-indigo-50 border text-indigo-300 border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-300"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              required=""
              type="number"
              min="1000"
              max="2024"
              name="publish"
              value={book.publish}
              onChange={(e) => {
                setBook({
                  ...book,
                  publish: e.target.value,
                });
              }}
              placeholder="Publish year"
              className="bg-indigo-50 border text-indigo-300 border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-300"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="bookImageUrl"
              value={book.bookImageUrl}
              onChange={(e) => {
                setBook({
                  ...book,
                  bookImageUrl: e.target.value,
                });
              }}
              placeholder="Book Image Url"
              className="bg-indigo-50 border text-indigo-300 border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-300"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={book.category}
              onChange={(e) => {
                setBook({
                  ...book,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-indigo-300 bg-indigo-50 border border-indigo-200 rounded-md outline-none  "
            >
              <option disabled>Select Book Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="rating"
              required=""
              min="0"
              step="0.1"
              max="5"
              value={book.rating}
              onChange={(e) => {
                setBook({
                  ...book,
                  rating: e.target.value,
                });
              }}
              placeholder="Rating"
              className="bg-indigo-50 border text-indigo-300 border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="ISBN"
              value={book.ISBN}
              onChange={(e) => {
                setBook({
                  ...book,
                  ISBN: e.target.value,
                });
              }}
              placeholder="ISBN"
              className="bg-indigo-50 border text-indigo-300 border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-300"
            />
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={book.desc}
              onChange={(e) => {
                setBook({
                  ...book,
                  desc: e.target.value,
                });
              }}
              name="description"
              placeholder="Book Description"
              rows="5"
              className=" w-full px-2 py-1 text-indigo-300 bg-indigo-50 border border-indigo-200 rounded-md outline-none placeholder-indigo-300 "
            ></textarea>
          </div>

          {/* Add book Button  */}
          <div className="mb-3">
            <button
              onClick={updateBookFunction}
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Update Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookPage;
