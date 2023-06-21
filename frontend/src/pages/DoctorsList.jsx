// export default function DoctorsList() {
//     const pages = useContext(PageContext);
//     const [reviews, setReviews] = useState([]);
  
//     useEffect(() => {
//       getAllPages()
//         .then(setPages)
//         .catch((error) => console.log(error));
  
//       getAllReviews()
//         .then(setReviews)
//         .catch((error) => console.log(error));
//     }, []);
  
//     return (
//       <>
//         <h4>
//           <NavLink to="/create-post">Can't Find a Doctor? Add One Here</NavLink>
//         </h4>
//         <div className="ui centered cards">
//           {pages.map((page) => (
//             <DoctorCard key={page.id} page={page} reviews={reviews} />
//           ))}
//         </div>
//       </>
//     );
//   }
  