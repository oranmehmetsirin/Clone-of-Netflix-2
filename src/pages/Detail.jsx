import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../utils/api";
import Loader from "./../components/Loader";
import { baseImgUrl } from "./../utils/constants";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import DetailDisplay from "../components/DetailDisplay";
import ActorCard from "../components/ActorCard";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits",
    };

    console.log(params);
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(movie?.credits);

  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          <section className="relative h-[20vh]">
            <img
              className="object-cover h-full w-full"
              src={baseImgUrl + movie.backdrop_path}
            />

            <div className="absolute bg-black inset-0 grid place-items-center bg-opacity-50">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </section>

          <section className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title="Categories" data={movie.genres} />
              <DetailDisplay
                title="Spoken Languages"
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title="Production Companies"
                data={movie.production_companies}
              />
              <DetailDisplay
                title="Production Countries"
                data={movie.production_countries}
              />
            </div>

            <div>
              <p>{movie.overview}</p>

              <p>
                Budget:
                <span className="text-green-600 ms-2">
                  {movie.budget === 0 ? "Unknown" : "$" + millify(movie.budget)}
                </span>
              </p>

              <p>
                Revenue:
                <span className="text-green-600 ms-2">
                  {movie.revenue === 0
                    ? "Unknown"
                    : "$" + millify(movie.revenue)}
                </span>
              </p>
            </div>
          </section>

          <section>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: 10,
              }}
            >
              {movie.credits.cast.map((actor, i) => (
                <SplideSlide key={i}>
                  <ActorCard actor={actor} />
                </SplideSlide>
              ))}
            </Splide>
          </section>
        </div>
      )}
    </div>
  );
};

export default Detail;
