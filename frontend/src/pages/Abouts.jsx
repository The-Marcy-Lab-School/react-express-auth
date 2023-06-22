import { fetchHandler } from "../utils";
import { useSpring, animated } from 'react-spring';
import '../styles/about.css';



export default function AboutPage() {
  const content = fetchHandler("/api/susu")
  console.log(content)
  const fadeAnimation = useSpring({
    from: { opacity: 1, transform: 'translateY(-150px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 900 },
  });
  return (<div className="container">
     <animated.div style={fadeAnimation}>

    <h2>Mission Statement</h2>
      <p>Our web platform restructures the operation of rotating savings associations (susu) for African and Caribbean families. By simplifying susu management, facilitating transparent transactions, and encouraging responsible financial practices, we empower these communities to achieve their financial goals, build generational wealth, and create a brighter future.
      </p>
    <h2>What is a Susu?</h2>
      <p>Susu is a traditional savings system where a group of people pool their money together regularly. Each member contributes a fixed amount, and the total amount is given to one member at each cycle until everyone has received their share. It's a way to save money, support each other, and reach financial goals as a community.  
      </p>
    <h2>Rules</h2>
      <>
        <ul>
          <li>Rule 1: Members contribute a fixed amount of money regularly.</li>
          <li>Rule 2: A rotation schedule determines who receives the pooled funds.</li>
          <li>Rule 3: Payouts occur according to the rotation schedule.</li>
          <li>Rule 4: Members must commit to consistent contributions.</li>
          <li>Rule 5: The susu continues until each member has received their share.</li>
        </ul>
      </>
      </animated.div>

  </div>);

}
