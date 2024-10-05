"use client";
import React, { useCallback, useState } from 'react';
import useFavorites from './useFavorites';
import Image from "next/image";
import Link from 'next/link';
import { IconDownload, IconHeartFilled, IconMaximize } from '@tabler/icons-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { Button } from './ui/button';
import { API_URL } from '@/custom-config';


export function FavoriteGallery(){
    const { favorites, toggleFavorite } = useFavorites();
    const [imgfScreen, setimgfScreen] = useState<boolean>(false)
    const [imgID, setimgID] = useState<number>(0);

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
    
    return(
        <div className='min-h-[90vh]'>
        {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-6xl mx-auto gap-5 p-10">
            { 
                favorites.map((wallpaper, index) => (
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
         ) :
         <p className='text-center my-10'>No favorites added yet.</p>
        }
    
        {/* ---------------------------------Image modal code starts--------------------------------- */}
        {favorites.length > 0 ?
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box w-11/12 max-w-6xl max-h-fit bg-slate-50 dark:bg-gray-900">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className='flex gap-3 pb-2 text-sm md:text-lg'>
              <p className="font-bold text-gray-400"> Category :</p>
              <p>{favorites[imgID].category}</p>
            </div>
            <FullScreen handle={handleImgPreview} onChange={reportChange} className='content-center'>
              <Image src={`${API_URL}/download?url=${favorites[imgID].path}`} width={500} height={500} className={imgfScreen ? 'h-auto md:h-[100%] w-auto m-auto' : 'h-auto md:h-[68vh] w-auto m-auto'} alt="wallpaper preview" />
            </FullScreen>
            <div className="pt-3 justify-between">
                <div className='flex text-sm md:text-md justify-start gap-5 md:gap-20 mb-5 md:mb-[-2rem]'>
                  <div className="text-center">
                    <p className="font-bold text-gray-400">Views</p>
                    <p>{favorites[imgID].views}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-400">File size</p>
                    <p>{((favorites[imgID].file_size / 1024)/1024).toFixed(2) + " MB"}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-400">File type</p>
                    <p>{favorites[imgID].file_type}</p>
                  </div>
                </div>
                <div className='flex justify-end gap-10'>
                    <Button onClick={handleImgPreview.enter}>
                      <IconMaximize className='mr-2 h-4 w-4' /> Preview
                    </Button>
                    <Button onClick={() =>{
                      handleDownload(favorites[imgID].path)
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
    
        </div>
    
      );
}