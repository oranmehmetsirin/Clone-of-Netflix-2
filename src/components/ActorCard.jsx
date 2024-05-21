import { baseImgUrl } from "../utils/constants";

const ActorCard = ({ actor }) => {
  const url = !actor.profile_path
    ? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    : baseImgUrl + actor.profile_path;

  return (
    <div className="w-[160px] flex flex-col line-clamp-1">
      <img className="h-[175px] w-[130px] object-cover" src={url} />
      <h2 className="font-bold font-xl">{actor.original_name}</h2>
      <h3 className="line-clamp-1 font-light">{actor.character}</h3>
    </div>
  );
};

export default ActorCard;
