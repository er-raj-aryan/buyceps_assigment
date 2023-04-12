import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import ListViews from "@/components/ListViews";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GET_ALL_POKEMON } from "@/query/Query";
import ReactPaginate from "react-paginate";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [first, setFirst] = useState(110);
  const [openDetailPage, setOpenDetailPage] = useState({});
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const cardPageCount = 20;

  const { loading, error, data } = useQuery(GET_ALL_POKEMON, {
    variables: { first },
  });

  const handleClick = (pItem) => {
    console.log("raj selected item", pItem);
    setOpenDetailPage(pItem);
  };

  if (loading)
    return (
      <div
        className=" w-full h-[100vh] flex
  justify-center items-center "
      >
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div
        className=" w-full h-[100vh] flex
  justify-center items-center "
      >
        <p>Error : {error.message}</p>
      </div>
    );


  const items = data.pokemons;

  

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + cardPageCount;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / cardPageCount);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * cardPageCount) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
    <Head >
      Buyceps Assignment
    </Head>
      <Navbar />
      <div className="text-gray-600 body-font flex flex-col justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {currentItems && currentItems.map((item, index) => (
              <div
                className="xl:w-1/4 md:w-1/2 m-4 drop-shadow-lg cursor-pointer "
                // onClick={() => handleClick(item)}
              >
                <ListViews
                  id={item.id}
                  name={item.name}
                  number={item.number}
                  types={item.types}
                  imageUrl={item.image}
                />
              </div>
            ))}

          </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          pageClassName="p-2 w-10 text-center "
          pageLinkClassName="page-link"
          previousClassName="p-2 w-10  border-gray-600 "
          previousLinkClassName="p-2 w-10  "
          nextClassName="p-2 w-10 text-center border-gray-600 "
          nextLinkClassName="page-link "
          breakClassName="p-2 text-center "
          breakLinkClassName="page-link"
          containerClassName="flex gap-2 item-center"
          activeClassName=" bg-black text-white p-2 w-10 rounded text-center "
        />
      </div>
      <Footer />
    </div>
  );
}
