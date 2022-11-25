import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center mt-20 text-2xl font-bold'>Blog Questions</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-24">
                <div>
                    <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
                    <div className="divider w-3/4 m-0"></div>
                    <p>
                        There are four main types of state you need to properly manage in your React apps:
                        Local state
                        Global state
                        Server state
                        URL state.

                        Local (UI) state - Local state is data we manage in one or another component.
                        Global (UI) state - Global state is data we manage across multiple components.
                        Server state - Data that comes from an external server that must be integrated with our UI state.
                        URL state - Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>How does prototypical inheritance work?</h1>
                    <div className="divider w-3/4 m-0"></div>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>What is a unit test? Why should we write unit tests?</h1>
                    <div className="divider w-3/4 m-0"></div>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>React vs Angular vs Vue</h1>
                    <div className="divider w-3/4 m-0"></div>
                    <p>Angular, React, and Vue are all under very active development. They regularly release new versions and maintain the existing ones. As the current level of support is high in each case, you can safely use any of these frameworks.It's important to note that Angular is not growing as fast as before, while Vue — even though it started more recently — seems to be growing a lot. We can't predict which frameworks will remain relevant in the long term, but each project has a great community behind it and is constantly evolving.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;