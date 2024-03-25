import React from "react";
import { Box, Button, FormControl, FormLabel, Select, Textarea, VStack } from "@chakra-ui/react";

const AthleteDataCollection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <Box maxWidth="480px" margin="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Select name="username" placeholder="Select user">
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
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
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AthleteDataCollection;
