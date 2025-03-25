import React from "react";
import { Box, Heading, Text, Avatar, AvatarGroup, Center } from "@chakra-ui/react";
import katrinImage from "../assets/images/katrin.jpg";

const About = () => {
  return (
    <Box m={8} maxWidth="1200px" mx="auto">
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        About Us
      </Heading>
      <Text fontSize="xl" mb={8} textAlign="center">
      Created with lots of love, passion and coffee! ☕
      </Text>
      <Center my={6}>
        <AvatarGroup size="lg" max={2}>
          <Avatar name="NomadApps" src={katrinImage} />
          <Avatar name="Robot" src="" />
        </AvatarGroup>
      </Center>
      <Center>
        <Text fontSize="md" maxWidth="800px">
          NomadApps created this website with the incredible help of a little robot.  If you have any feedback or ideas, please let us know! In the meantime, have fun trading and remember:{" "}
          <Text as="span" fontWeight="bold">
            Trade carefully.🚀🚀🚀
          </Text>
        </Text>
      </Center>
    </Box>
  );
};

export default About;
