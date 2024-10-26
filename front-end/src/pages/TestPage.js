import React, { useState } from 'react';
import Button from '../components/button'
import {Form, Dropdown, InputField} from '../components/form'
import {Notif, NotifContainer} from '../components/notif';

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

  // nesscessary for notif component
  const [notifs, setNotitfs] = useState([]);

  const addNotif = (message, type) => {
    setNotitfs((prev) => [...prev, { message, type }]);
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


      {/* Example notif trigger workflow */}
      <div>
      <button onClick={() => addNotif('I am a bad notification!!!!!!!!!!!!! Oh nnoooooooooooooooooooooooooooooo', 'error')}>
        <Button>Add Bad Notification </Button>
      </button>
      </div>
      <div>
      <button onClick={() => addNotif('I am a notification!!!!!!!!!!!!! Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay', 'success')}>
        <Button>Add Notification </Button>
      </button>
      </div>
      <NotifContainer notifs={notifs} setNotifs={setNotitfs} />







      </div>
    )
  }
  
  // make this component available to be imported into any other file
  export default TestPage