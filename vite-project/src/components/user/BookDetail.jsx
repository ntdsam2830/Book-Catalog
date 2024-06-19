import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Swal from "sweetalert2";

const BookDetail = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllBook, getAllBookFunction } = context;

  // navigate
  const navigate = useNavigate();

  // Delete Book
  const deleteBook = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "books", id));
      // toast.success("Book deleted successfully");
      getAllBookFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-indigo-300 font-bold">All Books</h1>
        {/* Add Product Button  */}
        <Link to={"/addbook"}>
          <button className="px-5 py-2 bg-indigo-50 border border-indigo-100 rounded-lg">
            Add Book
          </button>
        </Link>
      </div>

      {/* Loading  */}
      <div className="flex justify-center relative top-20">
        {loading && <Loader />}
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-indigo-100 text-indigo-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100"
              >
                Authors
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100"
              >
                Publish
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>

            {getAllBook
              .sort((a, b) => b.publish - a.publish)
              .map((item, index) => {
                const { id, name, authors, category, publish, bookImageUrl } =
                  item;
                return (
                  <tr key={index} className="text-indigo-300">
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 ">
                      {index + 1}.
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      <div className="flex justify-center">
                        <img className="w-20 " src={bookImageUrl} alt="" />
                      </div>
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {name}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {authors}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {category}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {publish}
                    </td>
                    <td
                      onClick={() => navigate(`/updatebook/${id}`)}
                      className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer "
                    >
                      Edit
                    </td>
                    <td
                      onClick={() =>
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteBook(id);
                            Swal.fire({
                              title: "Deleted!",
                              text: "The book has been deleted.",
                              icon: "success",
                            });
                          }
                        })
                      }
                      className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookDetail;
