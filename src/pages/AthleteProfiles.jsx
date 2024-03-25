import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard";

const AthleteProfiles = () => {
  const athleteProfiles = [
    {
      id: 1,
      name: "John Doe",
      sport: "Basketball",
      attributes: "Height: 6'5\", Weight: 200lbs",
      skills: "Shooting, Ball Handling",
      history: "3 years college experience",
    },
    {
      id: 2,
      name: "Jane Smith",
      sport: "Soccer",
      attributes: "Height: 5'7\", Weight: 130lbs",
      skills: "Speed, Agility",
      history: "4 years high school experience",
    },
  ];

  return (
    <Box maxWidth="1200px" margin="auto" py={8}>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {athleteProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AthleteProfiles;
