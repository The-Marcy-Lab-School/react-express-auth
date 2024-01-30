export default function Map({ location }) {
  return (
    <iframe
      width="80%"
      height="400"
      allowFullScreen=""
      loading="async"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://maps.google.com/maps?&q="+${location}"&output=embed`}
    ></iframe>
  );
}
