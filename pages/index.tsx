"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-20">
        <MovieList title="Top Movies" data={movies} />
      </div>
    </>
  );
}
