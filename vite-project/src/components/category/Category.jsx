// category
const category = [
  {
    image: "img/cooperation.png",
    name: "Business & Economics",
  },
  {
    image: "img/love-yourself.png",
    name: "Self-Help",
  },
  {
    image: "img/innovation.png",
    name: "Science & Technology",
  },
  {
    image: "img/city.png",
    name: "sci-Fi & Fantasy",
  },
  {
    image: "img/history-book.png",
    name: "Literature & Fiction",
  },
  {
    image: "img/evolution.png",
    name: "History",
  },
  {
    image: "img/comic.png",
    name: "Comics",
  },
  {
    image: "img/biography.png",
    name: "Biographies & Memoirs",
  },
  {
    image: "img/hearts.png",
    name: "Romance",
  },
  {
    image: "img/playtime.png",
    name: "Children",
  },
  {
    image: "img/education.png",
    name: "Education & Teaching",
  },
];

const Category = () => {
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll justify-around hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 ">
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
