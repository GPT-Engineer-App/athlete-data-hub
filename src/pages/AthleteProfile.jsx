import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack } from "@chakra-ui/react";

const AthleteProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to API to save in database
    console.log("Form submitted");
  };

  return (
    <Box maxWidth="480px" margin="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Select name="username" placeholder="Select user">
              {}
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
              {}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Profile Information</FormLabel>
            <Select name="profile_information" placeholder="Select profile">
              {}
              <option value="profile1">Profile 1</option>
              <option value="profile2">Profile 2</option>
              <option value="profile3">Profile 3</option>
              {}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Sport</FormLabel>
            <Select name="sport" placeholder="Select sport">
              <option>Basketball</option>
              <option>Football</option>
              <option>Soccer</option>
              <option>Tennis</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Physical Attributes</FormLabel>
            <Textarea name="attributes" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Skills</FormLabel>
            <Textarea name="skills" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Performance History</FormLabel>
            <Textarea name="history" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AthleteProfile;
