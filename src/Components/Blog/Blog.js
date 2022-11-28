import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const Blog = () => {
  return (
    <div className="px-[10%] py-4">
      <div className="w-full pt-16">
        <div className="mx-auto rounded-2xl bg-white p-2">
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-6 py-4 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span>What are the different ways to manage a state in a React application?</span>
                  <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-black`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The built-in way that React provides for setting component states is by using setState() and adding
                  “local state” to a class. There are several other ways to manage state​s in React, including the use
                  of: Hooks, React Context API Apollo Link State <br />
                  1.Using setState() <br />
                  2Sample React App using setState() <br />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-6 py-4 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span>How does prototypical inheritance work?</span>
                  <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-black`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">

                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-6 py-4 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span> What is a unit test? Why should we write unit tests?</span>
                  <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-black`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">

                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 
                px-6 py-4 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span> React vs. Angular vs. Vue?</span>
                  <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-black`} />
                </Disclosure.Button>
                <Disclosure.Panel className="grid grid-cols-1 lg:grid-cols-3 px-4 pt-4 gap-4 pb-2 text-sm text-gray-500">
                    <div>
                        <h1 className="text-center text-red-600 font-bold">Angular</h1>
                        <p>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>

                    </div>
                    <div>
                        <h1 className="text-center text-red-600 font-bold">React</h1>
                        <p>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.</p>

                    </div>
                    <div>
                        <h1 className="text-center text-red-600 font-bold">Vue</h1>
                        <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>

                    </div>
                   
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Blog;
