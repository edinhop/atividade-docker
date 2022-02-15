import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { QuoteeIndex } from '../components/Quotee';

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6" >
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-center"
          flexDir='column'
        >
          <SimpleGrid>
            <QuoteeIndex/>
          </SimpleGrid>


        </SimpleGrid>
      </Flex>
      <Footer/>
    </Flex>
  );
}