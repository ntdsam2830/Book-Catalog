/* eslint-disable no-unused-vars */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BookOpenText, Heart } from "lucide-react";
import { useContext } from "react";

import BookDetail from "../../components/user/BookDetail";
import FavBook from "../../components/user/FavBook";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";

const UserDashboard = () => {
  // user
  const user = JSON.parse(localStorage.getItem("user"));

  const context = useContext(myContext);
  const { getAllBook } = context;

  return (
    <Layout>
      <div>
        {/* Top */}
        <div className="top mb-5 px-5 mt-5">
          <div className=" bg-indigo-50 py-5 border border-indigo-100 rounded-lg">
            <h1 className=" text-center text-2xl font-bold text-indigo-500">
              User Info{" "}
            </h1>
          </div>
        </div>

        <div className="px-5">
          {/* Mid  */}
          <div className="mid mb-5">
            {/* main  */}
            <div className=" bg-indigo-50 py-5 rounded-xl border border-indigo-100">
              {/* image  */}
              <div className="flex justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                />
              </div>
              {/* text  */}
              <div className="">
                {/* Name  */}
                <h1 className=" text-center text-lg text-indigo-500">
                  <span className=" font-bold">Name :</span> {user?.name}
                </h1>

                {/* Email  */}
                <h1 className=" text-center text-lg text-indigo-500">
                  <span className=" font-bold">Email :</span> {user?.email}
                </h1>

                {/* Date  */}
                <h1 className=" text-center text-lg text-indigo-500">
                  <span className=" font-bold">Date : </span>
                  {user?.date}
                </h1>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="">
            <Tabs>
              <TabList className="flex flex-wrap -m-4 text-center justify-center">
                {/* Total Products */}
                <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                  <div className=" border bg-indigo-50 hover:bg-indigo-100 border-indigo-100 px-4 py-3 rounded-xl">
                    <div className="text-indigo-500 inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-books"
                      >
                        <BookOpenText />
                      </svg>
                    </div>
                    <h2 className="title-font font-medium text-3xl text-indigo-400 fonts1">
                      {getAllBook.length}
                    </h2>
                    <p className=" text-indigo-500  font-bold">Total Books</p>
                  </div>
                </Tab>

                <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                  <div className=" border bg-indigo-50 hover:bg-indigo-100 border-indigo-100 px-4 py-3 rounded-xl">
                    <div className="text-indigo-500 inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-book-open-text"
                      >
                        {" "}
                        <Heart />
                      </svg>
                    </div>
                    <h2 className="title-font font-medium text-3xl text-indigo-400 fonts1">
                      10
                    </h2>
                    <p className=" text-indigo-500  font-bold">
                      Favorite Books
                    </p>
                  </div>
                </Tab>
              </TabList>

              <TabPanel>
                <BookDetail />
              </TabPanel>

              {/* <TabPanel>
                <FavBook />
              </TabPanel> */}
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
