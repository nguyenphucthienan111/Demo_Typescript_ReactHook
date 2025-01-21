const UnionTypes = () => {
  const testUnionType = (input: string | number) => {
    if (typeof input === "string") {
      console.log(`String value: ${input}`);
    } else {
      console.log(`Number value: ${input}`);
    }
  };

  testUnionType(404);
  testUnionType("404");

  return <h1>UnionTypesPage</h1>;
};

export default UnionTypes;
