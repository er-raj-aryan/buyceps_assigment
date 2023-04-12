import React from "react";
import Link from 'next/link'

function ListViews(props) {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg  object-center flex flex-col gap-3">
        <div className="flex justify-center w-full">
          <img
            className="h-60 rounded w-60 object-contain object-center mb-6"
            src={props.imageUrl ? props.imageUrl : ""}
            alt="content"
          />
        </div>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          #{props.number ? props.number : ""}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font ">
          {props.name ? props.name : ""}
        </h2>
        <div className="flex items-center gap-3">
        {props.types ? props.types.map((item) => <div className={`p-1 ${item === 'Grass' ? 'bg-green-500' : item === 'Fire'? 'bg-orange-500 ' : item === 'Water'? 'bg-blue-500 ' : item === 'Bug' ? 'bg-green-300 ' : item === 'Normal' ? 'bg-gray-200' : item === 'Flying' ? 'bg-blue-300 ' : 'bg-violet-500 ' } rounded`}>{item}</div>) : ""}
        </div>
        <div className="flex items-center gap-3 text-blue-400 ">
        <Link href={`/pokemon/${props.id ? props.id :'' }`}>Go to Details
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ListViews;
