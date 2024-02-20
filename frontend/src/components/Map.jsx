export default function Map({ location }) {
  return (
    <iframe
      className="mt-5"
      width="100%"
      height="500"
      allowFullScreen=""
      loading="async"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://maps.google.com/maps?&q="+${location}"&output=embed`}
    ></iframe>
  );
}
