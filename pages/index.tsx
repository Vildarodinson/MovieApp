"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-20">
        <MovieList title="Top Movies" data={movies} />
        <MovieList title="Favorites" data={favorites} />
      </div>
    </>
  );
}
