import { MdLocationPin } from "react-icons/md";

const placesList = (props) => {
  return (
    <article className="card">
      <p
        className="img-holder"
        style={{
          backgroundImage: `url(${props.place.imgUrl})`,
        }}
      ></p>
      <div className="card-info">
        <p className="card-country-info">
          <span className="country-name">
            <MdLocationPin className="card-icon" />
            {props.place.country}
          </span>
          <a
            href={props.place.mapsUrl}
            target="_blank"
            title="link to google maps"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </p>
        <h2 className="card-location-name">{props.place.location}</h2>
        <p className="stay-duration">{props.place.stayDuration.join(" - ")}</p>
        <p className="place-info">{props.place.placeInfo}</p>
      </div>
    </article>
  );
};

export default placesList;
