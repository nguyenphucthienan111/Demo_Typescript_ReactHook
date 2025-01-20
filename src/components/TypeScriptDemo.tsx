const TypeScriptDemo = () => {
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
        <pre></pre>
      </section>

      <section>
        <h3>3. Types</h3>
        <p>Custom type definitions</p>
        <pre></pre>
      </section>

      <section>
        <h3>4. Generics</h3>
        <p>Reusable components with type parameters</p>
        <pre></pre>
      </section>

      <section>
        <h3>5. Union Types & Enums</h3>
        <p>Union types and enumerations</p>
        <pre></pre>
      </section>
    </div>
  );
};

export default TypeScriptDemo;
