import { Link } from "react-router-dom";
function Checkout() {
  return (
    <>
      <main className="min-h-screen bg-sky-50 pt-20">
        <div className="bg-sky-900 w-full max-w-[800px] mx-auto text-white shadow-xl mt-10 p-4 flex flex-col">
          <h1 className="text-xl font-bold mx-auto">
            Thank you for your purchase!
          </h1>
          <div className="flex w-full  h-16">
            {" "}
            <Link
              className="flex justify-center hover:cursor-pointer w-32  my-auto hover:border-solid hover:border-2 p-2 mb-2 mx-auto bg-[#DA9F53] font-bold hover:border-white text-white"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkout;
