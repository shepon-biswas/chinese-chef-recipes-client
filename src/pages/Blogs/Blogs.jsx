import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const Blogs = () => {
  const ref = useRef();

  return (
    <>
      <div className=" w-11/12 md:w-10/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 my-5" ref={ref}>
          <div className="p-3 md:p-10 border border-amber-400 rounded">
            <h2 className="text-xl font-bold my-3 ">
              Differences between uncontrolled and controlled components.
            </h2>
            <p>
              Basically, a controlled component is bound to a value, and its
              changes will be handled in code by using event-based callbacks.
              Here, the input form element is handled by the react itself rather
              than the DOM. In this, the mutable state is kept in the state
              property and will be updated only with setState() method.
              <br />
              Controlled components have functions that govern the data passing
              into them on every onChange event occurs. This data is then saved
              to state and updated with setState() method. It makes component
              have better control over the form elements and data.
            </p>
          </div>
          <div className="p-3 md:p-10 border border-amber-400 rounded">
            <h2 className="text-xl font-bold my-3 ">
              How to validate React props using PropTypes.
            </h2>
            <p>
              Props are an important mechanism for passing the read-only
              attributes to React components. The props are usually required to
              use correctly in the component. If it is not used correctly, the
              components may not behave as expected. Hence, it is required to
              use props validation in improving react components.
              <br />
              Props validation is a tool that will help the developers to avoid
              future bugs and problems. It is a useful way to force the correct
              usage of your components. It makes your code more readable. React
              components used special property PropTypes that help you to catch
              bugs by validating data types of values passed through props,
              although it is not necessary to define components with propTypes.
              However, if you use propTypes with your components, it helps you
              to avoid unexpected bugs.
            </p>
          </div>
          <div className="p-3 md:p-10 border border-amber-400 rounded">
            <h2 className="text-xl font-bold my-3 ">
              Difference between nodejs and express js.
            </h2>
            <p>
              Node.js is an open source and cross-platform runtime environment
              for executing JavaScript code outside of a browser. You need to
              remember that NodeJS is not a framework and its not a programming
              language. Most of the people are confused and understand its a
              framework or a programming language. We often use Node.js for
              building back-end services like APIs like Web App or Mobile App.
              Its used in production by large companies such as Paypal, Uber,
              Netflix, Walmart and so on.
              <br />
              <strong>Some Key Features of Node Js</strong>
              <br />
              <li>Versatility</li>
              <li>Zero buffering</li>
              <li>Network </li>
              <li>Occasion-driven input and output</li>
              <li>Better performance Scalability</li>
              <br />
              Express is a small framework that sits on top of Node.js web
              server functionality to simplify its APIs and add helpful new
              features. It makes it easier to organize your applications
              functionality with middle ware and routing. It adds helpful
              utilities to Node.js HTTP objects. It facilitates the rendering of
              dynamic HTTP objects.
              <br />
              <strong>Some Key Features of Express Js</strong>
              <br />
              <li>Server-side programming</li>
              <li>Page state retention</li>
              <li>Error-fixing </li>
              <li>Dynamic content</li>
              <br />
            </p>
          </div>
          <div className="p-3 md:p-10 border border-amber-400 rounded">
            <h2 className="text-xl font-bold my-3 ">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              Custom React JS hooks are reusable functions that a React JS
              software developer can use to add special and unique functionality
              to the React applications. Usually, if there is a requirement to
              add a feature, one can install a third-party library and solve the
              problem. But what if there is no such library with hooks that can
              be used? This problem is solved by using custom React JS hooks.
              <br />
              A custom hook is a special JavaScript function whose name starts
              with use and can be used to call other hooks. Lets take a look at
              some major differences between a custom React JS hook and React JS
              components:
              <br />
              <strong>Benifites of Custom Hooks</strong>
              <br />
              <li>A custom hook does not require a specific signature.</li>
              <li>
                A software developer can choose what argument the custom hook
                has and what should the argument return.
              </li>
              <li>A custom hook always starts with the name ‘use’. </li>
              <br />
              Custom React JS hooks offer three major benefits over standard
              library hooks: Reusability, readability, and testability.
              <br />
              <strong>Reusability</strong>
              <br />
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code. It also enhances the rendering
              speed of the code as a custom hook does not need to be rendered
              again and again while rendering the whole code.
              <br />
              <strong>Readability</strong>
              <br />
              Instead of using High-Order Components (HOCs), one can use custom
              hooks to improve the readability of the code. Complex codes can
              become hard to read if layers of providers surround the
              components, consumers, HOCs, render props, and other abstractions,
              generally known as wrapper hell.On the other hand, using custom
              React JS hooks can provide a cleaner logic and a better way to
              understand the relationship between data and the component.
              <br />
              <strong>Testability</strong>
              <br />
              Generally, the test containers and the presentational components
              are tested separately in React. This is not a trouble when it
              comes to unit tests. But, if a container contains several HOCs, it
              becomes difficult as you will have to test the containers and the
              components together to do the integration tests. Using custom
              React JS hooks, this problem can be eliminated as the hooks allow
              you to combine containers and components into one component. It
              also makes it easier to write separate unit tests for custom
              hooks. Using custom hooks also makes it easier to mock hooks when
              compared to mock HOCs as it is similar to mocking a function.
              <br />
              <br />
            </p>
          </div>
        </div>
        {/* React PDF Generate Button */}

        <div className="text-center my-4">
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-outline btn-warning">
                Download PDf
              </button>
            )}
            content={() => ref.current}
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;
