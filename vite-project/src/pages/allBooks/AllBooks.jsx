import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";

// productData
const bookData = [
  {
    id: 1,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/n/o/norwegian_wood_1_2020_04_29_14_48_08.jpg",
    name: "Norwegian Wood",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "Haruki Murakami",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_08352010_033550.jpg",
    name: "Toi Thay Hoa Vang Tren Co Xanh",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "Nguyen Nhat Anh",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 3,
    image: "https://ntthnue.edu.vn/uploads/Images/2016/11/127.jpg",
    name: "Ha Noi Bam Sau Pho Phuong",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "Thach Lam",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/02/12/hp_final_sorcerers-3_4.jpg?width=660&height=877&fit=crop&format=pjpg&auto=webp",
    name: "Harry Potter",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "J. K. Rowling",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    name: "To Kill a Mockingbird",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "Harper Lee",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 2,
    image: "https://cdn0.fahasa.com/media/catalog/product/7/1/713jiomo3ul.jpg",
    name: "Sapiens",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "Yuval Noah Harari",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://cdn.gramedia.com/uploads/items/9786020321486_Zero-To-One_GiqDeE9.jpg",
    name: "Zero to One",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    authors: "Peter Thiel",
    trendingBookName: "Featured",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://salt.tikicdn.com/ts/product/4a/4e/f5/f510ae5deb4a1754c2dc62d18886bc72.jpeg",
    name: "Shoe Dog",
    rating: 4.5,
    authors: "Phil Knight",
    trendingBookName: "Featured",
    quantity: 1,
  },
];

const AllBooks = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="py-8">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold">
            All Books
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {bookData.map((item, index) => {
                const { image, name, authors } = item;
                return (
                  <div key={index} className="p-3.5 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                      <img
                        onClick={() => navigate("/bookinfo")}
                        className="lg:h-80  h-96 w-full"
                        src={image}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs name-font font-medium text-gray-400 mb-1">
                          My Book Catalog
                        </h2>
                        <h1 className="name-font text-lg font-semibold text-gray-900 mb-3">
                          {name.substring(0, 25)}
                        </h1>
                        <h1 className="name-font text-lg font-medium text-gray-900 mb-3">
                          {authors}
                        </h1>

                        <div className="flex justify-center ">
                          <button
                            onClick={() => navigate("/bookinfo")}
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
    </Layout>
  );
};

export default AllBooks;
