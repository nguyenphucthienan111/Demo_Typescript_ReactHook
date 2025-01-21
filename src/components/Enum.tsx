import React, { useEffect } from 'react';


enum NumericEnum {
  OptionOne = 123,
  OptionTwo = 234,
}


enum StringEnum {
  OptionA = "ABC",
  OptionB = "XYZ",
}

const Enum = () => {
  useEffect(() => {

    console.log("Numeric Enum - OptionOne:", NumericEnum.OptionOne);
    console.log("Numeric Enum - OptionTwo:", NumericEnum.OptionTwo); 


    console.log("String Enum - OptionA:", StringEnum.OptionA); 
    console.log("String Enum - OptionB:", StringEnum.OptionB); 

  }, []);

  return (
    <div>
      <h1>Enum</h1>
      <p>Check the console for Enum examples (numeric and string).</p>
    </div>
  );
};

export default Enum;