import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ProfileCard = ({ profile }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Heading as="h3" size="md" mb={2}>
        {profile.name}
      </Heading>
      <Text>Sport: {profile.sport}</Text>
      <Text>Attributes: {profile.attributes}</Text>
      <Text>Skills: {profile.skills}</Text>
      <Text>History: {profile.history}</Text>
    </Box>
  );
};

export default ProfileCard;
