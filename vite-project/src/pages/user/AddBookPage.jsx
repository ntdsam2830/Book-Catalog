/* eslint-disable react/no-unescaped-entities */
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
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
    name: "sci-Fi & Fantasy",
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

const AddBookPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

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

  // Add book Function
  const addBookFunction = async () => {
    if (
      book.name == "" ||
      book.desc == "" ||
      book.bookImageUrl == "" ||
      book.category == "" ||
      book.authors == "" ||
      book.publish == "" ||
      book.rating == ""
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const bookRef = collection(fireDB, "books");
      await addDoc(bookRef, book);
      toast.success("Book added successfully");
      navigate("/user-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Book added failed");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-indigo-50 px-8 py-6 border border-indigo-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-indigo-500 ">
              Add Book
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
              type="date"
              min="1000-01-01"
              id="datePickerId"
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
            <script type="text/javascript">
              datePickerId.max = new Date().toISOString().split("T")[0];
            </script>
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
              onClick={addBookFunction}
              type="button"
              className="bg-indigo-500 hover:bg-indigo-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
