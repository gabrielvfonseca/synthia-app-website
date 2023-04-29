
// types
import { PromptDemo } from "@root/src/types/types";

const PromptDemo: PromptDemo = [
    {
      prompt: 'How do I publish a component?',
      res: `To publish a component on Acme, follow these steps:
  - At the root of your project, open or create a file named \`index.js\`, and add the following lines (you can add as many components as you need):
  \`\`\`js
  import Component1 from "/path/to/component1
  import Component2 from "/path/to/component2
  export {
    Component1,
    Component2,
    // ...
  }
  \`\`\`
  - Then, head over to the Component Library, accessible via the sidebar.
  - Navigate to the Publish tab, and set a new semantic version. It must be higher than the previous one.
  - Hit "Publish".`,
      references: ['Getting Started', 'Publishing', 'Components']
    },
    {
        prompt: 'How can I convert a string to a number in JavaScript?',
        res: `To convert a string to a number in JavaScript, you can use the \`parseInt()\` or \`parseFloat()\` functions. Here's an example:
    \`\`\`js
    const str = '42';
    const num = parseInt(str);
    
    console.log(num); // Output: 42
    \`\`\``,
        references:  ['MDN Web Docs - parseInt()', 'MDN Web Docs - parseFloat()']
    },
    {
        prompt: 'How can I create a new array in JavaScript?',
        res: `To create a new array in JavaScript, you can use the \`Array()\` constructor or the square bracket notation. Here are two examples:
    \`\`\`js
    const arr1 = new Array(); // Creates an empty array
    const arr2 = []; // Creates an empty array
    
    console.log(arr1); // Output: []
    console.log(arr2); // Output: []
    \`\`\``,
        references:  ['MDN Web Docs - Array() constructor', 'MDN Web Docs - Array literals']
    },
    {
        prompt: 'How can I add an event listener to an HTML element in JavaScript?',
        res: `To add an event listener to an HTML element in JavaScript, you can use the  \`addEventListener()\` method. Here's an example:
    \`\`\`js
    const button = document.querySelector('button');

    button.addEventListener('click', function() {
      console.log('Button clicked!');
    });
    \`\`\`
    This will add a click event listener to the button element, which will log "Button clicked!" to the console when the button is clicked.`,
        references:   ['MDN Web Docs - EventTarget.addEventListener()', 'W3Schools - HTML DOM addEventListener() Method']
    },
    {
        prompt: 'How can I improve my programming skills?',
        res: `To improve your programming skills, consider:
  - Practicing coding challenges
  - Contributing to open source projects
  - Building personal projects`,
        references: ['Getting Started', 'Tutorials', 'FAQ'],
    },
    {
        prompt: 'What is the best way to learn a new language?',
        res:  `The best way to learn a new language is to:
  - Immerse yourself in the language by reading, watching, and listening to content in that language
  - Practice speaking the language with native speakers or language partners
  - Use a variety of resources, such as textbooks, language apps, and online courses`,
        references: ['Documentation', 'API Reference', 'Support'],
    },
    {
        prompt: 'How can I become a better writer?',
        res: `To become a better writer, try:
  - Writing regularly to develop your skills
  - Reading extensively to improve your vocabulary and writing style
  - Getting feedback from other writers or writing groups`,
        references: ['Community', 'Blog', 'Events'],
    },
    {
        prompt: 'What are some good exercises for staying healthy?',
        res: `To stay healthy, you should:
  - Exercise regularly, aiming for at least 30 minutes of physical activity each day
  - Eat a balanced and nutritious diet, avoiding processed and sugary foods
  - Get enough sleep, ideally 7-9 hours per night`,
        references: ['Reference Manual', 'User Guide', 'Developer Guide'],
    },
    {
        prompt: 'How can I improve my public speaking skills?',
        res: `To improve your public speaking skills, consider:
  - Practicing speaking in front of a mirror or with a small audience
  - Joining a public speaking group or taking a course
  - Watching and learning from skilled public speakers, such as TED talks or political speeches`,
        references: ['Resources', 'Tools', 'Downloads']
    },
    {
        prompt: 'How do I create a new Git repository?',
        res: `To create a new Git repository, follow these steps:
  - Navigate to the parent directory where you want to create the new repository
  - Run the command "git init" to initialize the repository
  - Add files to the repository using "git add ."
  - Commit the changes using "git commit -m 'Initial commit'"
  - Create a new remote repository on a Git hosting service such as GitHub
  - Link the local and remote repositories using "git remote add origin [remote repository URL]"
  - Push the changes to the remote repository using "git push origin master"`,
        references: ['Documentation', 'API Reference', 'Support'],
    },
    {
        prompt: 'How can I optimize my website for search engines?',
        res: `To optimize your website for search engines, consider:
  - Conducting keyword research to identify relevant keywords and phrases to target
  - Creating high-quality, informative content that incorporates those keywords
  - Optimizing on-page elements such as titles, meta descriptions, and headers
  - Building high-quality backlinks from reputable sources
  - Ensuring your website is mobile-friendly and has fast loading times`,
        references: ['Tutorials', 'Blog', 'Forum'],
    },
    {
        prompt: 'What are some best practices for software development?',
        res: `Some best practices for software development include:
  - Writing clean, maintainable code
  - Using version control to manage code changes
  - Implementing automated testing to catch bugs early in the development process
  - Documenting code and processes for future reference
  - Collaborating effectively with team members using project management tools`,
        references: ['Reference Manual', 'User Guide', 'Developer Guide'],
    },
    {
        prompt: 'How do I troubleshoot network connectivity issues?',
        res: `To troubleshoot network connectivity issues, try the following:
  - Check that the device is properly connected to the network
  - Verify that the network settings are correct and DHCP is enabled
  - Disable any firewalls or antivirus software temporarily to see if they are blocking the connection
  - Ping the destination IP address or website to check if it is reachable
  - Try accessing the website or service from a different device to rule out local issues`,
        references: ['Knowledge Base', 'FAQ', 'Community'],
    },
    {
        prompt: 'How can I improve my time management skills?',
        res: `To improve your time management skills, consider:
  - Prioritizing tasks and creating a daily or weekly schedule
  - Setting clear goals and deadlines for each task
  - Avoiding multitasking and focusing on one task at a time
  - Minimizing distractions such as social media and email notifications
  - Taking breaks and allowing time for rest and relaxation`,
        references: ['Resources', 'Tools', 'Downloads']
    }    
];

export default PromptDemo;