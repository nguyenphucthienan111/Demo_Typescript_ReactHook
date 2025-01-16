type User = {
  id: number;
  name: string;
  age: number;
};

interface Product {
  id: number;
  name: string;
  price: number;
}

enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

interface Container<T> {
  value: T;
  label: string;
}
type Result = string | number | boolean;

const TypeScriptDemo = () => {
  const user: User = {
    id: 1,
    name: "FPTer",
    age: 30,
  };

  const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999,
  };

  const numberContainer: Container<number> = {
    value: 42,
    label: "Answer",
  };

  const stringContainer: Container<string> = {
    value: "Hello",
    label: "Greeting",
  };

  const handleResult = (result: Result) => {
    return `Result is: ${result}`;
  };

  return (
    <div className="typescript-demo">
      <h2>TypeScript Features Demo</h2>

      <section>
        <h3>1. Type Annotations</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>User type ensures object structure with id, name, and age</p>
      </section>

      <section>
        <h3>2. Interface</h3>
        <pre>{JSON.stringify(product, null, 2)}</pre>
        <p>Product interface defines a contract for product objects</p>
      </section>

      <section>
        <h3>3. Enum</h3>
        <pre>{JSON.stringify(Status, null, 2)}</pre>
        <p>Status enum provides a set of named constants</p>
      </section>

      <section>
        <h3>4. Generics</h3>
        <pre>{JSON.stringify(numberContainer, null, 2)}</pre>
        <pre>{JSON.stringify(stringContainer, null, 2)}</pre>
        <p>Container generic type works with different data types</p>
      </section>

      <section>
        <h3>5. Union Types</h3>
        <p>{handleResult("test")}</p>
        <p>{handleResult(42)}</p>
        <p>Union types allow multiple type possibilities</p>
      </section>
    </div>
  );
};

export default TypeScriptDemo;
