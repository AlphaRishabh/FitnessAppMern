import React from "react";
import { Box, Typography } from "@mui/material";
import CalorieCalculator from "../components/CalorieCalculator";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import Bgimage from "../assets/images/bgimage.jpg";

const BMRCalculator = () => {
  return (
    <><>
      <FormContainer
        style={{
        backgroundImage: `url(${Bgimage})`,
        padding: "0",
        margin: "0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "100%",
      }}
      >
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "68vh",
            
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            <h2>BMR Calculator</h2>
                      </Typography>
          <CalorieCalculator />
        </Box>
      </FormContainer>
    </><Footer /></>
  );
};

export default BMRCalculator;
