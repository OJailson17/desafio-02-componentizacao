import { MovieProps } from "../@types/movieProps";
import { MovieCard } from "./MovieCard";

import "../styles/content.scss";

interface ContentProps {
  movies: MovieProps[];
}

export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <main>
      <div className="movies-list">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
