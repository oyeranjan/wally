import { useEffect, useState } from 'react';


interface Wallpaper {
  id: string;
  url: string;
  path: string;
  dimension_x: number;
  dimension_y: number;
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

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Wallpaper[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }
  }, []);

  const toggleFavorite = (wallpaper: Wallpaper) => {
    let updatedFavorites = [...favorites];

    const isFavorite = favorites.some((fav) => fav.id === wallpaper.id);

    if (isFavorite) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== wallpaper.id);
      console.log(`Wallpaper with id ${wallpaper.id} removed from favorites`);
    } else {
      updatedFavorites.push(wallpaper);
      console.log(`Wallpaper with id ${wallpaper.id} added to favorites`);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;