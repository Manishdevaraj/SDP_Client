import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function OrgDashboard() {
     // Define state variables
  const [eventsAttended] = useState(10); // Assuming these are static values for now
  const [timeSpent] = useState('25 hours');
  const [rewardsEarned] = useState('150 points');
  const [donationCollected] = useState('$500');



  // Sample data for the bar chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example months
    datasets: [
      {
        label: 'Events Attended',
        data: [5, 10, 7, 12, 8], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) =>`${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  
  return (
    <>
     
         {/* -----Dashboard----- */}
         <Box className="w-full h-screen">
         <Flex flex="1" p="8" direction="column" gap="8" >
        {/* First Grid: 4 boxes with gradient backgrounds */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap="6"
          alignItems="stretch"
          justifyContent="space-between"
          h="30%" // Adjust the height as needed
        >
          <Box
            bg="linear-gradient(to right, #ff7e5f, #feb47b)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Events organised</Text>
            <Text fontSize="2xl" mt="4" color="white">{eventsAttended}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #6a11cb, #2575fc)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Volunteers turnout</Text>
            <Text fontSize="2xl" mt="4" color="white">{timeSpent}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #00c6ff, #0072ff)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Training Session held</Text>
            <Text fontSize="2xl" mt="4" color="white">{rewardsEarned}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #ff512f, #f09819)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Fund Raised</Text>
            <Text fontSize="2xl" mt="4" color="white">{donationCollected}</Text>
          </Box>
        </Grid>

        {/* Second Grid: 2 boxes */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap="6"
          h="30%" // Adjust the height as needed
        >
          <Box bg="white" boxShadow="md" p="6" borderRadius="md" h="100%">
            <Text  className="text-pink-600 text-3xl font-psemibold">Events Overview</Text>
            <Bar data={chartData} options={chartOptions} />
          </Box>
          <Box bg="white" boxShadow="md" p="6" borderRadius="md" h="100%">
            <Text className="text-pink-600 text-3xl font-psemibold">Recent Event Attended</Text>
            <Text fontSize="xl" mt="4" color="darkblue" >
              {/* List of recent events */}
              SKCT-AVANTAA
            </Text>
          </Box>
        </Grid>
      </Flex>
         </Box>   
         
    </>
  )
}

export default OrgDashboard