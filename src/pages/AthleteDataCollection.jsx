import React from "react";
import { Box, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const AthleteDataCollection = () => {
  return (
    <Box>
      <form>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Select id="username" placeholder="Select user">
            {}
          </Select>
        </FormControl>
        {}
      </form>
    </Box>
  );
};

export default AthleteDataCollection;
