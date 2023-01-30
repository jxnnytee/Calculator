import React, { useState, useContext, createContext } from "react";
import { Box } from "@chakra-ui/react";
import OutputSection from "./OutputSection";
import InputSection from "./InputSection";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function Calculator() {
  const [currentCalculation, setCalculation] = useState("");
  const [isResult, setIsResult] = useState(false);
  const styles = {
    outputStyles: {
      color: "#eee",
      backgroundColor: "teal"
    },
    inputStyles: {
      fontColor: "#333a4d",
      baseColor: "black",
      hoverColor: "teal.200",
      accentColor1: "blue.3",
      hoverColor1: "#bbb",
      accentColor2: "#fda170",
      hoverColor2: "blue.200",
      accentColor3: "#f88d6d",
      hoverColor3: "blue.200"
    }
  };

  return (
    <AppContext.Provider
      value={{ currentCalculation, setCalculation, isResult, setIsResult }}
    >      
      <Box
        w="300px"
        h="400px"
        borderRadius="0"
        boxShadow="0px 0px 100px -15px rgba(0,0,0,0.9)"
        cursor="pointer"
        userSelect="none"
      >
        <OutputSection
          output={currentCalculation}
          style={styles.outputStyles}
        />
        <InputSection style={styles.inputStyles} />
      </Box>
    </AppContext.Provider>
  );
}
