"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { IconDownload, IconHeartFilled, IconMaximize, IconRefresh } from '@tabler/icons-react';
import { DummyDashboard } from './SidebarNav';
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; 
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import useFavorites from './useFavorites';
import { API_URL } from '@/custom-config';


interface Wallpaper {
  id: string;
  url: string;
  path: string;
  dimension_x : number;
  dimension_y : number;
  views: number;
  thumbs: {
    large: string;
  };
  file_size: number;
  file_type: string;
  category: string;
  created_at: string;
  [key: number]: any; // Index signature
}

export function ExploreWithFilters() {
    
    const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({
        general: 0,
        anime: 0,
        people: 0,
        aiart: 0,
        sfw: 0,
        sketchy: 0,
        nsfw: 0, 
      });
    const [query, setQuery] = useState<string>(''); // For the search input
    const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
    const [page, setPage] = useState<number>(2); // Start pagination from page 2
    const [lastPage, setlastPage] = useState<number>(0);
    const [totalImage, settotalImage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [searchedSucess, setsearchedSucess] = useState<boolean>(false);
    const [queryText, setqueryText] = useState<string>('');
    const [imageFilter, setimageFilter] = useState<string>('&categories=111&purity=110&sorting=relevance&order=desc&ai_art_filter=1');
    const [imgfScreen, setimgfScreen] = useState<boolean>(false)
    const [imgID, setimgID] = useState<number>(0);
    const observerRef = useRef<HTMLDivElement | null>(null);

    // State to hold selected values for both selects
    const [sortBy, setSortBy] = useState<string>('');
    const [order, setOrder] = useState<string>('');

    const { favorites, toggleFavorite } = useFavorites();
    // Check if a wallpaper is in the favorites
    const isFavorite = (id: string) => {
      return favorites.some((fav) => fav.id === id);
    };

    const handleImgPreview = useFullScreenHandle();

    const reportChange = useCallback((state:any, handle:any) => {
      if (handle === handleImgPreview) {
        //console.log('Img in Fullscreen', state, handle);
        setimgfScreen(state)
      }
    }, [handleImgPreview]);

    // Handlers to update the state
    const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOrder(e.target.value);
    };

    const placeholders = [
      "Search photos and illustration",
      "Mountains", "Nature", "Sky", "Clouds", "Anime", "Art & Design", "Futuristic", "Cars & bikes"
    ];
  
    const handleSelect = (value: string) => {
        setSelectedItems((prevSelectedItems) => ({
          ...prevSelectedItems,
          [value]: prevSelectedItems[value] === 1 ? 0 : 1,
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.get(`/search?q=${query}${imageFilter}`);
        setWallpapers(response.data.data); // No need to append, just set the data
        setlastPage(response.data.meta.last_page)
        settotalImage(response.data.meta.total)
        // console.log(response.data.meta)
        setsearchedSucess(true)
        setqueryText(query)
      } catch (error) {
        console.error('Error fetching wallpapers:', error);
      } finally {
        setLoading(false);
      }
    };

    const handleFilterClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("submitted filter query!!");
        try {
          const response = await axios.get(`/search?q=${query}${imageFilter}`);
          setWallpapers(response.data.data); // No need to append, just set the data
          setlastPage(response.data.meta.last_page)
          settotalImage(response.data.meta.total)
          // console.log(response.data.meta)
          setsearchedSucess(true)
          setqueryText(query)
        } catch (error) {
          console.error('Error fetching wallpapers:', error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        setimageFilter(`&categories=${selectedItems.general}${selectedItems.anime}${selectedItems.people}&purity=${selectedItems.sfw}${selectedItems.sketchy}${selectedItems.nsfw}&sorting=${sortBy}&order=${order}&ai_art_filter=${selectedItems.aiart}`)
    }, [selectedItems,sortBy,order])
    

    // Fetch the initial set of images (page 1, without the page parameter)
    const fetchInitialWallpapers = async () => {
      try {
        const response = await axios.get(`/search?q=abstract+tech&categories=111&purity=110&sorting=relevance&order=desc&ai_art_filter=1`);
        setWallpapers(response.data.data); // No need to append, just set the data
        setlastPage(response.data.meta.last_page)
        // console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching wallpapers:', error);
      } finally {
        setLoading(false);
      }
    };
    
    // Fetch the next pages of images (page 2 onwards)
    const fetchWallpapers = async (pageNumber: number) => {
      setLoadingMore(true);
      try {
        const response = await axios.get(`/search?q=${query}${imageFilter}&page=${pageNumber}`);
        setWallpapers((prevWallpapers) => [...prevWallpapers, ...response.data.data]); // Append new wallpapers
      } catch (error) {
        console.error('Error fetching wallpapers:', error);
      } finally {
        setLoadingMore(false);
      }
    };
    useEffect(() => {
      fetchInitialWallpapers(); // Fetch the first page on component mount
    }, []);

    useEffect(() => {
      fetchWallpapers(page-1); // Fetch the next page
    }, [page]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !loading) {
            setPage((page) => page + 1); // Increment page number
          }
        },
        {
          root: null, // Default is viewport
          rootMargin: "0px",
          threshold: 1.0, // Trigger when 100% is in view
        }
      );
  
      if (observerRef.current) observer.observe(observerRef.current);
  
      return () => {
        if (observerRef.current) observer.unobserve(observerRef.current);
      };
    }, [loading]);
  
    // const handleLoadMore = () => {
    //   fetchWallpapers(page); // Fetch the next page
    //   setPage(page + 1); // Increment page number
    // };

    const openModal = (index: number) => {
      const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
      setimgID(index);
      if (modal) {
        setTimeout(() => {
          modal.showModal();
        }, 100); 
        
      }
    };

    const handleDownload = async (imgUrl:string) => {
      try {

        const url = `${API_URL}/download?url=${imgUrl}`
        const aTag = document.createElement('a');
        aTag.href = url;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

      } catch(error:any) {
        console.error('Download failed:', error.message);
      }
    }

  if (loading) return <DummyDashboard />;

  return(
    <div className='min-h-[90vh]'>
    <div className="mt-[2rem] items-center mx-auto px-4">
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
        />
    </div>
    <div className='grid md:flex items-center justify-center justify-items-start ps-2 gap-2 mt-4 mx-auto'>
        <ToggleGroup variant="outline" type="multiple" className='grid grid-cols-4 md:grid-cols-7'>
            <ToggleGroupItem value="general"  aria-label="General" className='hover:bg-slate-900' onClick={() => handleSelect('general')}>
                <p>General</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="anime" aria-label="Anime" className='hover:bg-slate-900' onClick={() => handleSelect('anime')}>
                <p>Anime</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="people" aria-label="People" className='hover:bg-slate-900'  onClick={() => handleSelect('people')}>
                <p>People</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="aiart" aria-label="AI Art" className='hover:bg-slate-900'  onClick={() => handleSelect('aiart')}>
                <p>AI Art</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="sfw" aria-label="SFW" className='hover:bg-slate-900'  onClick={() => handleSelect('sfw')}>
                <p>SFW</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="sketchy" aria-label="Sketchy" className='hover:bg-slate-900'  onClick={() => handleSelect('sketchy')}>
                <p>Sketchy</p>
            </ToggleGroupItem>
            <ToggleGroupItem disabled value="nsfw" aria-label="NSFW" className='hover:bg-slate-900'  onClick={() => handleSelect('nsfw')}>
                <p>NSFW</p>
            </ToggleGroupItem>
        </ToggleGroup>
        <div className='grid grid-cols-3'>
        <select className="select select-bordered w-[100px] md:w-[140px] self-center h-[40px] min-h-[40px] mr-5 ps-3 bg-slate-50 dark:bg-gray-900" value={sortBy} onChange={handleSortByChange}>
          <option defaultValue={''}>Sort by</option>
          <option value="relevance">Relevance</option>
          <option value="random">Random</option>
          <option value="date_added">Date Added</option>
          <option value="views">Views</option>
          <option value="favorites">Favorites</option>
          <option value="toplist">Toplist</option>
          <option value="hot">Hot</option>
        </select>

        <select className="select select-bordered w-[100px] md:w-[140px] self-center h-[40px] min-h-[40px] mr-5 ps-3 bg-slate-50 dark:bg-gray-900" value={order} onChange={handleOrderChange}>
          <option defaultValue={''}>Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="secondary" onClick={handleFilterClick} className='max-w-[3.5rem] h-auto'>
                        <IconRefresh className='hover:rotate-180 transform transition-transform duration-700 ease-in-out' />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Reload</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        </div>
    </div>
    {queryText.length > 2 ? <div className='grid item-starts max-w-6xl mx-auto px-10 pt-10'>
      <p className='text-sm md:text-[16px] lg:text-[20px]'>Your search for <span className='font-bold'>`{queryText}`</span> revealed <span className='font-bold'>`{totalImage}`</span> captivating wallpapers.</p>
    </div> : ''}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-6xl mx-auto gap-5 p-10">
        {
            wallpapers.map((wallpaper, index) => (
                <div key={wallpaper.id} className='h-48 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                    <Link href={'#'} onClick={() =>openModal(index)}>
                        <Image
                        src={wallpaper.thumbs.large}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110"
                        height="400"
                        width="400"
                        alt="thumbnail"
                        />
                    </Link>
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>
                    <div className="relative text-sm text-white flex flex-row w-full justify-between px-2 pb-1">
                        <span>{wallpaper.dimension_x+ "x"+ wallpaper.dimension_y}</span>
                        <span className='flex flex-row gap-2'>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <IconHeartFilled onClick={() => toggleFavorite(wallpaper)} className={isFavorite(wallpaper.id) ? 'cursor-pointer text-red-600 stroke-white' : 'cursor-pointer'} />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{isFavorite(wallpaper.id) ? "Remove from Favorite" : "Add to Favorite"}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                            <IconDownload onClick={() =>{ handleDownload(wallpaper.path) }} className='cursor-pointer' />
                        </span>
                    </div>
                </div>
            ))
        }
    </div>
    {   (page-1) >= lastPage ? <p className='text-center pb-5'> End of the page. </p> :
        <div className='text-center mb-4'>
            <button
                disabled={loadingMore}
                className="px-4 py-2 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800 bg-slate-900/[0.8] hover:bg-slate-700 border rounded-lg border-slate-800 backdrop-blur-xl">
                {loadingMore ? 'Loading...' : 'Load more'}
            </button>
        </div>
    }
    {/* ---------------------------------Image modal code starts--------------------------------- */}

    {wallpapers.length > 0 ?
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box w-11/12 max-w-6xl max-h-fit bg-slate-50 dark:bg-gray-900">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className='flex gap-3 pb-2 text-sm md:text-lg'>
          <p className="font-bold text-gray-400"> Category :</p>
          <p>{wallpapers[imgID].category}</p>
        </div>
        <FullScreen handle={handleImgPreview} onChange={reportChange} className='content-center'>
          <Image src={`${API_URL}/download?url=${wallpapers[imgID].path}`} width={500} height={500} className={imgfScreen ? 'h-auto md:h-[100%] w-auto m-auto' : 'h-auto md:h-[68vh] w-auto m-auto'} alt="wallpaper preview" />
        </FullScreen>
        <div className="pt-3 justify-between">
            <div className='flex text-sm md:text-md justify-start gap-5 md:gap-20 mb-5 md:mb-[-2rem]'>
              <div className="text-center">
                <p className="font-bold text-gray-400">Views</p>
                <p>{wallpapers[imgID].views}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-400">File size</p>
                <p>{((wallpapers[imgID].file_size / 1024)/1024).toFixed(2) + " MB"}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-400">File type</p>
                <p>{wallpapers[imgID].file_type}</p>
              </div>
            </div>
            <div className='flex justify-end gap-10'>
                <Button onClick={handleImgPreview.enter}>
                  <IconMaximize className='mr-2 h-4 w-4' /> Preview
                </Button>
                <Button onClick={() =>{
                  handleDownload(wallpapers[imgID].path)
                }}>
                  <IconDownload className='mr-2 h-4 w-4' /> Download
                </Button>
            </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog> : '' }
    {/* ---------------------------------Image modal code ends--------------------------------- */}
    <div ref={observerRef}>{" "}</div>
    </div>
  );
}
