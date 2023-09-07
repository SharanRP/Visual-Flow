**React**

vid-1

-   To create your first React app, visit the Create React App page on
    > the React site. You\'ll need Node.js and MPX installed. Follow the
    > instructions to create and start your app

-   For deployment, create a GitHub repository and push your code there.
    > Add a homepage key to package.json with your username and app name

-   Install gh-pages and add necessary scripts to package.json for
    > deployment. Build your app to create a \'build\' directory
    > containing HTML, CSS, JS, and media files

-   Deploy your app to GitHub Pages with \'yarn deploy.\' Now, anyone
    > can access your app via the provided URL

Vid-2

-   To style the page, we define a new class called \'title\' in CSS
    > with \'text-align: center.\' In the JavaScript, we use
    > \'className\' instead of \'class\' because JSX converts it to
    > JavaScript, and JavaScript uses \'className\' for specifying the
    > class.

-   Styling in React is different from HTML. In React, we use an object
    > for styling. We open curly braces to escape to JavaScript and
    > create an object with nested curly braces. For example, we set
    > \'margin: auto\' and \'width: 800 pixels.\' In React, it\'s common
    > to use integer values for style properties, which are interpreted
    > as pixels.

-   Dashes in CSS properties become camel cases in React. For example,
    > \'padding-top\' becomes \'paddingTop.\' So, we add padding to the
    > top of \'1rem

-   React makes it easy to work with HTML code by allowing you to copy
    > and paste it and then make necessary adjustments for \'className\'
    > and styling. It\'s flexible for creating various types of HTML.

Vid-3

-   The \'pokemon.json\' file contains an array of objects, each
    > representing a Pokemon with ID, name (in multiple languages),
    > type, and base stats.

Vid-4

-   Import the Pokemon data into your app by using \'import pokemon from
    > pokemon.json\'. Now, you have access to the \'pokemon\' array.

-   Format the Pokemon data into your HTML document. Use \'pokemon.map\'
    > to iterate over the array and display Pokemon names and types.

-   When mapping over a list in React, always provide a unique \'key\'
    > to each element. In this case, use \'pokemon.id\' as the key

-   If you don\'t have a unique \'id\', you can synthesize one by
    > joining other values, ensuring it\'s unique among siblings

-   You can use array methods like \'slice\' to limit the number of
    > Pokemon displayed, improving performance.

Vid-5

-   Start by adding an input tag and formatting it in CSS. To manage the
    > input\'s value, use React hooks, specifically react.useState,
    > which returns an array with the current state and a function to
    > set it.

-   To filter the Pokemon list based on the user\'s input, use the
    > filter method on the array. Ensure it\'s a case-insensitive search
    > by converting both the English name and the filter to lowercase.

-   Enhance the application by allowing users to select a Pokemon. Use a
    > grid layout to organize the input field and the table. Create
    > another state called \'selectedItem\' to track the selected
    > Pokemon.

-   Implement a custom event called \'onSelect\' for the Pokemon row
    > component, which allows users to select a Pokemon. Add a button in
    > the table with an \'onClick\' handler that calls \'onSelect\' and
    > passes the selected Pokemon.

-   Make the selection even better by creating a new component called
    > \'PokemonInfo.\' This component displays detailed information
    > about the selected Pokemon, including its name in English.

-   To use \'PokeInfo,\' spread the properties of the \'selectedItem\'
    > into \'PokemonInfo\' to pass the necessary data. Define PropTypes
    > for \'PokemonInfo\' to ensure type safety.

-   Use \'object.keys\' to iterate over the base stats and show them in
    > a tabular format.

-   

Vid-6

-   We can use react useEffects(This runs a function in reaction to a
    > change. The second argument is an array of values; when they
    > change, you want that original function to run) to load te
    > pokemon.json file using fetch API and load the response inform of
    > data in the pokemonSet created using react hook

Vid-7

-   We used emotion (css in js ) to create a styled react component

-   , we created various component scuh as Input , Container , Title and
    > ued them in our code

Vid-9

-   To create a class component in React, define a class that extends
    > React.Component, create a constructor, and set the initial state.

-   Update function calls to use this.setState instead of setting state
    > directly in a class component.

-   In class components, we have lifecycle methods like
    > componentDidMount for fetching data and performing side effects.

-   The componentDidMount method is a standard place to fetch data in
    > class components, similar to how we use useEffect in functional
    > components.

**Mini-project : (Pokemon Search App)**

Preview:

![](vertopal_201cc6aba0ce494cbc382f05684c4ab8/media/image1.png){width="6.5in"
height="4.291666666666667in"}

