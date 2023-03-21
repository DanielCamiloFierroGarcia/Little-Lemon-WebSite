import { ClipLoader } from "react-spinners";

export default function Testimonial({
  firstName,
  lastName,
  message,
  rating,
  image,
}) {
  return (
    <article className="testimonial">
      {rating && image && firstName && lastName && message ? (
        <>
          <h4>{rating}/5 Stars</h4>
          <div>
            <img src={image} alt="user headshot" width="100" height="100" />
            <strong>
              {firstName} {lastName}
            </strong>
          </div>
          <p>'{message}'</p>
        </>
      ) : (
        <ClipLoader></ClipLoader>
      )}
    </article>
  );
}