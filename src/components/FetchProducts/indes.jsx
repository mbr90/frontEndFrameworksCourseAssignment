import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

const url = "https://api.noroff.dev/api/v1/online-shop";

function FetchProducts() {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [searchValue, setSearchValue] = useState(posts);

  const Filter = (event) => {
    setSearchValue(
      posts.filter((post) => {
        const lowerCaseSearch = event.target.value.toLowerCase();
        const lowerCaseTitle = post.title.toLowerCase();
        const lowerCaseDescription = post.description.toLowerCase();
        const priceMatch = post.price.toString().includes(lowerCaseSearch);

        return (
          lowerCaseTitle.includes(lowerCaseSearch) ||
          lowerCaseDescription.includes(lowerCaseSearch) ||
          priceMatch
        );
      })
    );
  };

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);

        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
        setSearchValue(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts..</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="flex-col p-5 mx-auto w-full max-w-[1400px]">
      <div className="w-full flex justify-center">
        <input
          type="text"
          className="border-solid border-2 border-black w-1/2 h-8 pl-1"
          onChange={Filter}
          placeholder="Search"
        />
      </div>
      <ul className="flex flex-wrap w-full">
        {searchValue.map((post) => (
          <div
            className="m-8 w-full max-w-[400px] mx-auto  bg-sky-900 shadow-xl relative"
            key={post.id}
          >
            <li>
              <Link to={`/product/${post.id}`}>
                <img
                  className="w-full h-40 object-cover"
                  src={post.imageUrl}
                  alt={post.description}
                />{" "}
              </Link>
              <div className="p-4 flex flex-col mb-10">
                <div className="h-40">
                  <h2 className="text-white font-bold ">{post.title}</h2>
                  <p className="text-white ">{post.description}</p>
                </div>
                <div className="my-2 flex w-full mb-6 absolute bottom-16">
                  {post.discountedPrice != post.price ? (
                    <p className="text-white">
                      Discount Price:{" "}
                      <span className="font-bold">
                        {formatCurrency(post.discountedPrice)}
                      </span>{" "}
                      Save:{" "}
                      <span className="font-bold">
                        {formatCurrency(post.price - post.discountedPrice)}{" "}
                      </span>
                    </p>
                  ) : (
                    <p className="text-white">
                      Price:{" "}
                      <span className="font-bold">
                        {formatCurrency(post.price)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <Link
                className="hover:border-solid hover:border-2 text-white hover:border-white absolute bottom-4 right-4 bg-[#DA9F53] p-2 font-bold"
                to={`/product/${post.id}`}
              >
                See product
              </Link>
            </li>
          </div>
        ))}
      </ul>{" "}
    </div>
  );
}

export default FetchProducts;
