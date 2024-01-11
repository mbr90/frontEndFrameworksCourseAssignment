import { useEffect, useState } from "react";

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
    <div className="flex-col p-5 mx-auto w-full">
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
          <li
            className="m-8 p-2 w-full max-w-[48%] mx-auto  bg-slate-500 "
            key={post.id}
          >
            <h2 className="text-white font-bold ">{post.title}</h2>
            <img
              className="w-40 h-40 my-2"
              src={post.imageUrl}
              alt={post.description}
            />
            <p className="text-white ">{post.description}</p>
            <p className="text-white">{post.price}$</p>
            <p className="text-white">
              Discounted Price:{post.discountedPrice}$
            </p>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default FetchProducts;
