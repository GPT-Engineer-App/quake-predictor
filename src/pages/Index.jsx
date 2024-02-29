import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Input, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    // Normally, you'd fetch this data from an API
    // For this example, we're simulating an API call with hard-coded data
    setEarthquakes([
      { date: "2021-01-10", magnitude: 4.5 },
      { date: "2020-12-22", magnitude: 3.2 },
      // ... more historical earthquake data
    ]);
  }, []);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const predictEarthquake = () => {
    setLoading(true);
    // Simulate API call for prediction
    setTimeout(() => {
      // This is a mock prediction
      // In a real-world scenario, you'd use a machine learning model or statistical analysis
      setPrediction({
        date: `${year}-07-15`,
        magnitude: 5.3,
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Container maxW="container.xl">
      <Heading my={4}>Earthquake Prediction Tool</Heading>
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Enter a Year to Predict Earthquakes
        </Heading>
        <Input placeholder="YYYY" value={year} onChange={handleYearChange} maxLength={4} mb={2} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={predictEarthquake} isLoading={loading}>
          Predict
        </Button>
      </Box>

      {prediction && (
        <Box mb={8}>
          <Heading size="md" mb={2}>
            Prediction Result
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Magnitude</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{prediction.date}</Td>
                <Td>{prediction.magnitude}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}

      <Heading size="md" mb={2}>
        Historical Earthquakes
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Magnitude</Th>
          </Tr>
        </Thead>
        <Tbody>
          {earthquakes.map((quake, index) => (
            <Tr key={index}>
              <Td>{quake.date}</Td>
              <Td>{quake.magnitude}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Index;
