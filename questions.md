# What is the difference between Component and PureComponent? Give an example where it might break my app.

The difference is that the pure component avoids re-renders for equal states and props. And this pure component can break the app when we use arrays, because the date inside the array are reference, and this reference can be differente in each render, causing unexpected renders.

# Context + ShouldComponentUpdate might be dangerous. Why is that?

The main problem with using context with shouldComponentUpdate is that components can end up depending on values ​​that are inside the context but are not their own props or state, which can cause two things to happen, or the flow of the context gets blocked. or causing bugs or unexpected behavior due to these dependencies

# Describe 3 ways to pass information from a component to its PARENT.

We can use props, passing the state from the parent to the children we can change the state and know the value in the parent. We can also use Context o Redux for send a global state, this global state can be change by the children and used by the parent. And also we can use a callback function, passed to the children and used inside to know the need it information

# Give 2 ways to prevent components from re-rendering.

Memorization functions can be used to reduce unnecessary renderings, such functions are useCallback, useMemo, and memo.
You can also use the useRef hook to create reference variables that allow you to store values ​​for later use but don't necessarily cause re-renders.

# What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is an easy way to group elements within a react component but without creating a new node in the DOM, besides that this element does not have styles which avoids unexpected behavior when the only thing we want is to group elements

# Give 3 examples of the HOC pattern.

1. We can use a HOC to create a walkthrough within an application, creating a component that encloses the child components, giving them the ability to be highlighted and have an order and position within the walkthrough.

2. We can use a HOC to create restricted components for use within a logged in application, giving additional capabilities to the components if you are a logged in user.

3. Expanding on the previous idea, you can create a hoc to manage different types of users, creating a hoc that will change its functionality depending on the type of user, so, for example, being an admin, you will be given the ability to delete some elements. , or modify them.

#What's the difference in handling exceptions in promises, callbacks and async...await?
In the case of callbacks, errors tend to be handled first, as the first attribute that hits the callback.
In the case of promises, we are given our own method, its name is .catch() which receives the error and allows us to handle it.
And in async/await, we typically use a try/catch block to handle functionality and errors.

# How many arguments does setState take and why is it async.

The setState receives two parameters, the first that is mandatory, which is a value that will mutate the value of the original state, and the second that is optional, is a function that will be executed as a callback at the end of the state update. This function is usually useful when we want to see how the state value is being updated and check that the behavior is being as expected.
And, the setState is async since react adds it to a state queue that changes one by one, which allows it to have better performance and give better handling of state updates.

# List the steps needed to migrate a Class to Function Component.

First we create the file with the name that we will put to the component.
We create the component in the form of an arrow function with the same name as the file and using pascalCase.
We pass the properties to the component, being careful to remove all 'this.props' references.
We remove the 'this.state' and replace each value with a useState.
We migrate the lifecycle methods using the useEffect hook.
We remove all the created methods and create them as functions.
And we make sure to delete all references to 'super' and 'this'

# List a few ways styles can be used with components.

You can use css modules, styled components, or inline styles.

# How to render an HTML string coming from the server.

We can use dangerouslySetInnerHTML
