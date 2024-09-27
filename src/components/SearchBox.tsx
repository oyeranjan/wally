"use client";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

interface Props {
  showSearchbox: boolean;
}

export function SearchBox({showSearchbox}:Props) {
  const placeholders = [
    "Search photos and illustration",
    "Mountains", "Nature", "Sky", "Clouds", "Anime", "Art & Design", "Futuristic", "Cars & bikes"
  ];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
    <div className={showSearchbox ? "pt-[2rem] flex flex-col justify-center  items-center px-4" : 'hidden'}>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      
    </div>
    </>
  );
}
