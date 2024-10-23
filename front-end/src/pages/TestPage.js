import Button from '../components/button'
import {Form, Dropdown, InputField} from '../components/form'

/**
 * A React component that represents a single page of the app.
 * Use this file to create new pages as needed
 * Don't forget to add the new route to App.js
 */
const TestPage = props => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
      };
    return (
      <div>
         <h1 className="text-2xl font-bold mb-4">Component Playground</h1>

        {/* Test Button */}
        <Button>Test Button</Button>


        {/* Testing Form with InputField and Dropdown */}
        <Form onSubmit={handleSubmit}>
                {/* InputField without state management */}
                <InputField type="text" placeholder="Test Input" label="Name" />

                {/* Dropdown without state management */}
                <Dropdown
                options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' }
                ]}
                />
            </Form>






      </div>



    )
  }
  
  // make this component available to be imported into any other file
  export default TestPage