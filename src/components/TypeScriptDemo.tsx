import Enum from "./Enum";
import UnionTypes from "./UnionTypes";

const TypeScriptDemo = () => {
  // Interfaces
  interface User {
    id: number;
    firstName: string; 
    lastName: string;
    age: number;
    email: string; 
    status?: string; 
  }

  const user: User = {
    id: 1,
    firstName: "Nguyen Van",
    lastName: "A",
    age: 20,
    email: "NguyenVanA@gmail.com",
    status: "none"
  }

  // Types
  type Product = {
    id: number;
    name: string;
    price: number;
  };
  const product: Product = { id: 101, name: "Laptop", price: 1200 };

   // Generics
   const getArray = <T,>(items: T[]): T[] => {
    return [...items];
  };
  const numberArray = getArray([1, 2, 3]);
  const stringArray = getArray(["a", "b", "c"]);

  return (
    <div className="typescript-demo">
      <h2>TypeScript Features Demo</h2>

      <section>
        <h3>1. Type Annotations</h3>
        <p>Basic type annotations in TypeScript</p>
        <pre style={{ color: "red" }}>
          {`let name: string = "John";
let age: number = 25;
let isActive: boolean = true;`}
        </pre>
      </section>

      <section>
        <h3>2. Interfaces</h3>
        <p>Define object shapes with interfaces</p>
        <pre style={{ color: "red" }}>
          {`interface User {
   id: number;
    firstName: string; 
    lastName: string;
    age: number;
    email: string; 
    status?: string; 
  
}

const user: User = {
    id: 1,
    firstName: "Nguyen Van",
    lastName: "A",
    age: 20,
    email: "NguyenVanA@gmail.com",
    status: "none"
  }`}
        </pre>
        <p>Result:</p>
        <p>ID: {user.id}</p>
        <p>Full Name: {user.firstName} {user.lastName}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        {user.status && <p>Status: {user.status}</p>}
      </section>

      <section>
        <h3>3. Types</h3>
        <p>Custom type definitions</p>
        <pre style={{ color: "red" }}>
          {`type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = { id: 101, name: "Laptop", price: 1200 };`}
        </pre>
        <p>Result:</p>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
      </section>

      <section>
        <h3>4. Generics</h3>
        <p>Reusable components with type parameters</p>
        <pre style={{ color: "red" }}>
          {
            `const getArray = <T,>(items: T[]): T[] => {
    return [...items];
  };
  const numberArray = getArray([1, 2, 3]);
  const stringArray = getArray(["a", "b", "c"]);`
          }
        </pre>
        <p>Result:</p>
        <p>Number Array: {numberArray.join(", ")}</p>
        <p>String Array: {stringArray.join(", ")}</p>
      </section>

      <section>
        <h3>5. Union Types & Enums</h3>
        <p>Union types and enumerations</p>
        <pre>
              <UnionTypes/>
              <Enum/>
        </pre>
      </section>
    </div>
  );
};

export default TypeScriptDemo;
