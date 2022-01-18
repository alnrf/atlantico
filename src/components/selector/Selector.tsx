import React from "react";
import { FormControl, Select, SelectProps } from "@chakra-ui/react";

interface OptionData {
  english: string;
  portuguese: string;
}

interface SelectorProps extends SelectProps {
  name?: string;
  options: OptionData[];
  placeholder?: string;
}

function Selector({ name, placeholder, options, ...rest }: SelectorProps) {
  return (
    <>
      <FormControl>
        <Select
          id={name}
          name={name}
          color="#000000"
          variant="outline"
          placeholder={placeholder}
          focusBorderColor="purple.900"
          backgroundColor="white"
          size="md"
          {...rest}
        >
          {options?.length > 0 &&
            options.map((option, index) => (
              <option key={index} value={option.english}>
                {option.portuguese}
              </option>
            ))}
        </Select>
      </FormControl>
    </>
  );
}

export default Selector;
