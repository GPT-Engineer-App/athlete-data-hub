import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Divider, Icon, Container, Button } from "@chakra-ui/react";
import { FaUserCircle, FaChartBar, FaHistory, FaChartPie, FaListAlt, FaClipboardList, FaTasks, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const PhaseCard = ({ icon, title, description }) => (
  <Box p={6} borderWidth={1} borderRadius="lg" textAlign="center">
    <Icon as={icon} boxSize={12} mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.lg" py={12}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Data-Driven Athlete Development Program
      </Heading>

      <Text fontSize="xl" mb={12} textAlign="center">
        Our multi-phase approach leverages data to optimize athletic performance. The process covers athlete profiling, performance tracking, analysis, personalized planning, and continuous optimization.
      </Text>

      <VStack spacing={12} align="stretch">
        <PhaseCard icon={FaUserCircle} title="Athlete Profile" description="Collect comprehensive data about each athlete, including physical attributes, sport-specific skills, and performance history." />

        <PhaseCard icon={FaChartBar} title="Performance Metrics" description="Identify and track key performance indicators relevant to each athlete's sport and position." />

        <PhaseCard icon={FaHistory} title="Historical Performance" description="Analyze the athlete's performance data over time to identify trends, strengths, and areas for improvement." />

        <PhaseCard icon={FaChartPie} title="Analysis & Categorization" description="Use advanced analytics to segment athletes based on performance, potential, and specific development needs." />

        <PhaseCard icon={FaListAlt} title="Personalized Recommendations" description="Generate tailored insights and recommendations for each athlete based on their profile and performance data." />

        <PhaseCard icon={FaClipboardList} title="Training Plan Development" description="Create customized training plans that address each athlete's unique requirements and goals." />

        <PhaseCard icon={FaTasks} title="Implementation & Monitoring" description="Implement the training plan, closely monitoring the athlete's progress and gathering ongoing feedback." />

        <PhaseCard icon={FaCog} title="Adjustment & Optimization" description="Continuously refine the athlete's plan based on their progress, ensuring optimal development over time." />
      </VStack>

      <Divider my={12} />

      <Text fontSize="lg" textAlign="center" mb={8}>
        This data-driven methodology empowers coaches, athletes, and analysts to make informed decisions, unlocking the full potential of every athlete.
      </Text>

      <Button as={Link} to="/athlete-profiles" colorScheme="blue" size="lg" mx="auto" display="block">
        View Athlete Profiles
      </Button>

      <Image src="https://images.unsplash.com/photo-1620213391117-0d169a917221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdGhsZXRlcyUyMHRyYWluaW5nJTIwd2l0aCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzExMzMwNDk3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Athletes training with technology" mt={12} mx="auto" />
    </Container>
  );
};

export default Index;
