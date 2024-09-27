"use client";
import { HeroSection } from "@/components/HeroSection";
import { ImageGalleryCommon } from "@/components/ImageGalleryCommon";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { IconCategory2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { API_URL } from '@/custom-config';



const Anime = [
    { id : 1, text : "Characters", value : "anime character" },
    { id : 2, text : "Series", value : "anime series" },
    { id : 3, text : "Visual Novels", value : "visual novels" },
]
const Art = [
    { id : 1, text : "Architecture", value : "architecture" },
    { id : 2, text : "Digital", value : "digital" },
    { id : 3, text : "Photography", value : "photography" },
    { id : 4, text : "Traditional", value : "traditional" },
]
const Entertainment = [
    { id : 1, text : "Comic Books", value : "Comic Books" },
    { id : 2, text : "Graphic Novels", value : "Graphic Novels" },
    { id : 3, text : "Games", value : "games" },
    { id : 4, text : "Literature", value : "literature" },
    { id : 5, text : "Movies", value : "movies" },
    { id : 6, text : "Music", value : "music" },
    { id : 7, text : "Sports", value : "sports" },
    { id : 8, text : "Television", value : "television" },
]
const Knowledge = [
    { id : 1, text : "History", value : "history" },
    { id : 2, text : "Holiday", value : "holiday" },
    { id : 3, text : "Military & Weapons", value : "military" },
    { id : 4, text : "Quotes", value : "quotes" },
    { id : 5, text : "Religion", value : "religion" },
    { id : 6, text : "Science", value : "science" },
]
const Location = [
    { id : 1, text : "Cities", value : "cities" },
    { id : 2, text : "Countries", value : "countries" },
    { id : 3, text : "Space", value : "space" },
]
const Miscellaneous = [
    { id : 1, text : "Clothing", value : "clothing" },
    { id : 2, text : "Colors", value : "colors" },
    { id : 3, text : "Companies", value : "companies" },
    { id : 4, text : "Logos", value : "logos" },
    { id : 5, text : "Food", value : "food" },
    { id : 6, text : "Technology", value : "technology" },
]
const Nature = [
    { id : 1, text : "Animals", value : "animals" },
    { id : 2, text : "Landscapes", value : "landscapes" },
    { id : 3, text : "Plants", value : "plants" },
    { id : 4, text : "Ocean", value : "ocean" },
    { id : 5, text : "Rivers", value : "river" },
    { id : 6, text : "Roads", value : "roads" },
]
const People = [
    { id : 1, text : "Artists", value : "animals" },
    { id : 2, text : "Celebrities", value : "landscapes" },
    { id : 3, text : "Fictional Characters", value : "fictional characters" },
    { id : 4, text : "Models", value : "models" },
    { id : 5, text : "Musicians", value : "musicians" },
    { id : 6, text : "Photographers", value : "photographers" },
]
const Vechiles = [
    { id : 1, text : "Aircraft", value : "aircraft" },
    { id : 2, text : "Cars", value : "cars" },
    { id : 3, text : "Motorcycles", value : "motorcycles" },
    { id : 4, text : "Ships", value : "ships" },
    { id : 5, text : "Spacecrafts", value : "spacecraft" },
    { id : 6, text : "Trains", value : "trains" },
]

const categoryMap : { [key : string] : {id: number, text: string, value: string}[] } = {
    anime: Anime,
    art: Art,
    entertainment: Entertainment,
    knowledge: Knowledge,
    location: Location,
    miscellaneous: Miscellaneous,
    nature: Nature,
    people: People,
    vehicles: Vechiles,
}

export default function Category() {

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [subcategories, setSubcategories] = useState<{ id: number, text: string, value: string }[]>([]);
    const [subCategoryValue, setsubCategoryValue] = useState<string>('');
    const [catValueQuery, setcatValueQuery] = useState<string>('')

    

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        setSubcategories(categoryMap[e.target.value] || []); 
    }

    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setsubCategoryValue(e.target.value)
    }

    const handleCategoriesSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Category query submitted");
        setcatValueQuery(subCategoryValue)
    };

  return (
    <>
      <HeroHighlight>
      <div
          className={cn(
            "rounded-md flex flex-col md:flex-row w-[100vw] flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-x-hidden",
            "h-screen"
          )}
        >
          <SidebarNav />
          <div className="w-full">
            <HeroSection text1="Unleash the Art of Your Screen: Dive into a" text2="World of Stunning Wallpapers" />
            <div className="max-w-6xl m-auto px-2 py-5 md:py-1 md:px-10">
                <div className="p-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 ">
                    <div className="flex items-center justify-start gap-4 pb-1">
                        <IconCategory2 stroke={2.5} className="w-6 h-6 md:w-10 md:h-10" />
                        <p className="text-xl md:text-2xl">Explore Category</p>
                    </div>
                    <div className="flex gap-2 md:gap-10 mx-1 md:mx-10 my-3">
                        <select className="select select-bordered w-[150px] md:w-[200px] bg-gray-700" value={selectedCategory} onChange={handleCategoryChange} >
                            <option defaultValue={''}>Select Category</option>
                            <option value="anime">Anime & Manga</option>
                            <option value="art">Art & Design</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="knowledge">Knowledge</option>
                            <option value="location">Location</option>
                            <option value="miscellaneous">Miscellaneous</option>
                            <option value="nature">Nature</option>
                            <option value="people">People</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                        <select className="select select-bordered w-[150px] md:w-[200px] bg-gray-700" value={subCategoryValue} onChange={handleSubCategoryChange}>
                            <option defaultValue={''}>Sub Category</option>
                            {subcategories.map((subcategory) => 
                            <option key={subcategory.id} value={subcategory.value}>{subcategory.text}</option>
                            )}
                        </select>
                        
                        <Button variant="outline" className="h-auto bg-gray-700" onClick={handleCategoriesSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
            <ImageGalleryCommon queryUrl={`${API_URL}/wallpapers?q=${catValueQuery}&categories=111&purity=110&sorting=views&order=desc&ai_art_filter=0`} />
            <Footer />
          </div>

        </div>
      </HeroHighlight>
    </>
  );
}
