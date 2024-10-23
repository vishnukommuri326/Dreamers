import Button from '../components/button'

/**
 * A React component that represents a single page of the app.
 * Use this file to create new pages as needed
 * Don't forget to add the new route to App.js
 */
const TestPage = props => {
    return (
      <div>
         <h1 className="text-2xl font-bold mb-4">Component Playground</h1>

        {/* Test Button */}
        <Button>Test Button</Button>
      </div>
    )
  }
  
  // make this component available to be imported into any other file
  export default TestPage