"use client";
import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { IconDownload, IconHeartFilled, IconMaximize } from '@tabler/icons-react';
import { DummyDashboard } from './SidebarNav';
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Button } from './ui/button';
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
    [key: number]: any;
}

export function ParallaxScrollGallery() {
    const [query, setQuery] = useState<string>(''); // For the search input
    const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
    const [page, setPage] = useState<number>(2); // Start pagination from page 2
    const [lastPage, setlastPage] = useState<number>(0);
    const [totalImage, settotalImage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [searchedSucess, setsearchedSucess] = useState<boolean>(false);
    const [queryText, setqueryText] = useState<string>('');
    const [imgID, setimgID] = useState<number>(0);
    const [imgfScreen, setimgfScreen] = useState<boolean>(false)
    const observerRef = useRef<HTMLDivElement | null>(null);

    const { favorites, toggleFavorite } = useFavorites();

    // Check if a wallpaper is in the favorites
    const isFavorite = (id: string) => {
      return favorites.some((fav) => fav.id === id);
    };

    const placeholders = [
      "Search photos and illustration",
      "Mountains", "Nature", "Sky", "Clouds", "Anime", "Art & Design", "Futuristic", "Cars & bikes"
    ];
  
    const handleImgPreview = useFullScreenHandle();

    const reportChange = useCallback((state:any, handle:any) => {
      if (handle === handleImgPreview) {
        //console.log('Img in Fullscreen', state, handle);
        setimgfScreen(state)
      }
    }, [handleImgPreview]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setQuery(e.target.value);
    };
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("submitted");
      try {
        const response = await axios.get(`/search?q=${query}&categories=111&purity=110&sorting=relevance&order=desc&ai_art_filter=1`);
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

    // Fetch the initial set of images (page 1, without the page parameter)
    const fetchInitialWallpapers = async () => {
      try {
        const response = await axios.get(`/search?categories=111&purity=110&sorting=relevance&order=desc&ai_art_filter=1`);
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
        const response = await axios.get(`/search?q=${query}&categories=100&purity=110&sorting=date_added&order=desc&ai_art_filter=0&page=${pageNumber}`);
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

    const openModal = (index: number) => {
      const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
      setimgID(index);
      if (modal) {
        setTimeout(() => {
          modal.showModal();
        }, 100); 
        
      }
    }

    const closeModal = () => {
      const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
      if (modal) {
        modal.close();
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

  return(
    <div className='min-h-[90vh]'>
    <div className="pt-[2rem] flex flex-col px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
    {queryText.length > 2 ? <div className='grid item-starts max-w-6xl mx-auto px-10 pt-10'>
      <p className='text-sm md:text-[16px] lg:text-[20px]'>Your search for <span className='font-bold'>`{queryText}`</span> revealed <span className='font-bold'>`{totalImage}`</span> captivating wallpapers. Try <Link href={'/explore'} className="link link-hover text-blue-500">search</Link> with filters.</p>
    </div> : ''}
    {loading ? <DummyDashboard /> : 
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
    }
    {   (page-1) >= lastPage ? <p className='text-center'> End of the page. </p> :
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
          <button onClick={() => closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
        <button onClick={() => closeModal}>close</button>
      </form>
    </dialog> : '' }
    {/* ---------------------------------Image modal code ends--------------------------------- */}
    <div ref={observerRef}>{" "}</div>
    </div>
  );
}
