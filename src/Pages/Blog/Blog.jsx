const Blog = () => {
  return (
    <div className="container mx-auto">
      {/* Question -1 */}
      <div className="question m-5 border-2 border-gray-500 p-2">
        <p className="m-5  text-xl text-[#ff1276]">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </p>
      </div>
      <div className="answer m-5 p-5">
        <p className="mb-2 text-lg">
          An access token is a credential that grants permission to access
          protected resources. It's obtained after successful authentication and
          is included in requests to the server.
        </p>
        <p className="mb-2 text-lg">
          A refresh token is a credential used to obtain a new access token when
          the current one expires. It has a longer lifespan and is securely
          stored by the client.
        </p>
        <p className="mb-2 text-lg">
          On the client-side, access tokens can be stored in memory or
          short-lived cookies, while refresh tokens should be stored securely in
          mechanisms like secure cookies or device keychains to prevent
          unauthorized access. Follow security best practices for storage and
          token management.
        </p>
      </div>

      {/* Question -2 */}
      <div className="question m-5 border-2 border-gray-500 p-2">
        <p className="m-5  text-xl text-[#ff1276]">
        Compare SQL and NoSQL databases?
        </p>
      </div>
      <div className="answer m-5 p-5">
        <p className="mb-2 text-lg font-bold">
            SQL (Structured Query Language) databases:
        </p>
        <ul className="p-2 m-4">
            <li className="list-disc">Use a structured data model with predefined schemas.</li>
            <li className="list-disc">Use tables with rows and columns to store data.</li>
            <li className="list-disc">Enforce data integrity through constraints and relationships.</li>
            <li className="list-disc">Support complex queries and join operations.</li>
            <li className="list-disc">Examples include MySQL, PostgreSQL, and Oracle.</li>
        </ul>

        <p className="mb-2 text-lg font-bold">
        NoSQL (Not Only SQL) databases:
        </p>
        <ul className="p-2 m-4">
            <li className="list-disc">Use a flexible, schema-less data model.</li>
            <li className="list-disc">Store data in various formats like key-value pairs, documents, or graphs.</li>
            <li className="list-disc">Provide high scalability and performance.</li>
            <li className="list-disc">Better suited for handling unstructured, semi-structured, or rapidly changing data.</li>
            <li className="list-disc">Examples include MongoDB, Cassandra, and Redis.</li>
        </ul>

      </div>


 {/* Question -3 */}
 <div className="question m-5 border-2 border-gray-500 p-2">
        <p className="m-5  text-xl text-[#ff1276]">
        What is express js? What is Nest JS?
        </p>
      </div>
      <div className="answer m-5 p-5">
        <p className="mb-2 text-lg">
        <b>Express.js:</b> A lightweight and flexible web application framework for Node.js, known for its simplicity, scalability, and extensive middleware ecosystem.
        </p>
        <p className="mb-2 text-lg">
        <b>Nest.js :</b> A progressive Node.js framework built on top of Express.js, using TypeScript and providing additional features and architectural patterns inspired by Angular. It promotes modularity and organization in application development.
        </p>
        
      </div>


       {/* Question -4 */}
 <div className="question m-5 border-2 border-gray-500 p-2">
        <p className="m-5  text-xl text-[#ff1276]">
        What is MongoDB aggregate and how does it work?
        </p>
      </div>
      <div className="answer m-5 p-5">
        <p className="mb-2 text-lg">
        MongoDB's aggregate is a framework for performing complex data analysis and transformations on MongoDB collections. It uses a pipeline-based approach where data flows through stages that perform operations like filtering, grouping, sorting, and aggregating. The output of one stage becomes the input for the next, allowing for flexible data manipulation and analysis. It enables advanced data processing and provides powerful tools for generating insights from MongoDB data.
        </p>
       
        
      </div>

    </div>
  );
};

export default Blog;
