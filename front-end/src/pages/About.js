/**
 * A React component that represents a single page of the app.
 * Use this file to create new pages as needed
 * Don't forget to add the new route to App.js
 */
import '../assets/styles/About.css';
import logo from '../assets/images/dreamer-1.png';


const About = props => {
    return (
      <div>
        <h1>About Us</h1>

        <img src={logo} alt="Logo" className="logo" width = "200" height = "200" />  
        


        
        <h2> While We Were Dreaming is a location-based platform designed to connect NYU students through the shared memories they create on campus. By pinning personal experiences to a dynamic map, students can reflect on key moments of their college journey and explore the memories of others enhanced by anonymity. This platform fosters a sense of community and nostalgia, bridging the emotional gap often felt in an open-city campus like NYU. The map becomes a collective memory, capturing the dreams and experiences of past, present, and future students.</h2>



      </div>
    )
  }
  
  // make this component available to be imported into any other file
  export default About