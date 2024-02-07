import { Flex, Box } from '@chakra-ui/react'
import InfoCard from '../components/InfoCard';

export default function AboutUsPage() {
    return <>

    <Flex 
      align="center"
      justify="center"
      flexDirection="column"
      h="80vh">

    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Us</h1>

    <Box
        p="2rem"
        maxW="800px"
        textAlign="center"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis
          dis parturient montes nascetur ridiculus. Viverra suspendisse potenti
          nullam ac. Duis at tellus at urna condimentum mattis. Varius quam quisque
          id diam vel quam elementum pulvinar. Pharetra vel turpis nunc eget lorem
          dolor sed viverra. Turpis cursus in hac habitasse platea dictumst quisque
          sagittis. Orci sagittis eu volutpat odio.
        </p>
      </Box>
    </Flex>

    <Box 
      align="center"
      justify="center"
      flexDirection="column"
      mt="60"
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Meet The Team</h1>
    </Box>
    <Flex justify="space-evenly" mt="50" mb="50">
      <Box>
        <InfoCard />
      </Box>
      <Box>
        <InfoCard />
      </Box>
      <Box>
        <InfoCard />
      </Box>
      <Box>
        <InfoCard />
      </Box>
    </Flex>
    </>;
}