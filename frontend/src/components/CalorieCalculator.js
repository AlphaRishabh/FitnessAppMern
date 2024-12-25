import React, { useState } from "react";
import "./calorie.css";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    bmr = Math.trunc(bmr);
    const deficitCalories = bmr - 500;
    const maintenanceCalories = bmr;
    const bulkingCalories = bmr + 500;

    setResults({
      deficit: deficitCalories.toFixed(2),
      maintenance: maintenanceCalories.toFixed(2),
      bulking: bulkingCalories.toFixed(2),
    });
  };

  const [results, setResults] = useState({
    deficit: "",
    maintenance: "",
    bulking: "",
  });

  return (
    <div className="calorie-calculator">
      <Form onSubmit={calculateCalories} className="styled-form">
        <FormGroup>
          <FormLabel htmlFor="age">Age: </FormLabel>
          <FormControl
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="weight">Weight (kg): </FormLabel>
          <FormControl
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="height">Height (cm): </FormLabel>
          <FormControl
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </FormGroup>

        <Button variant="primary" type="submit" className="mb-3 mt-3">
          Calculate Calories
        </Button>

        <Table bordered className="styled-form">
  <thead>
    <tr>
      <th>Calorie Type</th>
      <th>Calories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Deficit</td>
      <td data-testid="deficit">{results.deficit}</td>
    </tr>
    <tr>
      <td>Maintenance</td>
      <td data-testid="maintenance">{results.maintenance}</td>
    </tr>
    <tr>
      <td>Bulking</td>
      <td data-testid="bulking">{results.bulking}</td>
    </tr>
  </tbody>
</Table>

      </Form>
    </div>
  );
};

export default CalorieCalculator;
