import { Container, Text, VStack, Heading, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Coding Services
        </Heading>
        <Text fontSize="lg" textAlign="center">
          We provide top-notch coding solutions to help you build and scale your projects.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={4} textAlign="center">
            <IconButton aria-label="Code" icon={<FaCode />} size="lg" isRound />
            <Text mt={2}>Custom Development</Text>
          </Box>
          <Box p={4} textAlign="center">
            <IconButton aria-label="Launch" icon={<FaRocket />} size="lg" isRound />
            <Text mt={2}>Project Launch</Text>
          </Box>
          <Box p={4} textAlign="center">
            <IconButton aria-label="Laptop Code" icon={<FaLaptopCode />} size="lg" isRound />
            <Text mt={2}>Consulting</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;