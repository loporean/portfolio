import{A as i}from"./UIcon.fda489f8.js";function d(e,...t){const o=Object.assign({},e);return Object.keys(o).forEach(a=>{t.includes(a)&&delete o[a]}),o}const n=e=>e,p=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Langauges",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],r=e=>{const t=d(e,"category");return e.category&&(t.category=p.find(o=>o.slug===e.category)),t},c=[r({slug:"js",color:"yellow",description:"A versatile scripting language primarily used for creating interactive web applications. In my project Scribble, I used it to develop real-time features like chat rooms, user authentication, and interactive UI elements. Through this experience, I learned how to implement real-time communication, manage user interactions, and create dynamic web content, enhancing my ability to build engaging web applications.",logo:i.JavaScript,name:"Javascript",category:"pro-lang"}),r({slug:"css",color:"blue",description:"A stylesheet language used for describing the presentation of documents written in HTML or XML. I've applied CSS in all of my web development projects, including Inform A Fish and Scribble. In these projects, I used CSS to create attractive and intuitive user interfaces, implement responsive designs, and ensure a consistent look and feel across different pages and components. Through my extensive use of CSS, I've become proficient in modern layout techniques like flexbox and grid, mastered the creation of responsive designs, and learned how to efficiently organize and maintain stylesheets in larger projects. This experience has significantly enhanced my ability to create visually appealing and highly functional web designs.",logo:i.CSS,name:"CSS",category:"markup-style"}),r({slug:"html",color:"orange",description:"The standard markup language for creating web pages. I've used HTML extensively in all my web development projects, including Inform A Fish, where it was crucial for structuring content about fish species, habitats, and catch records. In the Scribble project, I worked with JSX, which is similar to HTML but allows for more dynamic content creation within React components. Through these experiences, I've deepened my understanding of semantic markup, proper document structure, and the importance of accessibility in web development, enhancing my ability to create well-organized and user-friendly web interfaces.",logo:i.HTML,name:"HTML",category:"markup-style"}),r({slug:"reactjs",color:"cyan",description:"A JavaScript library for building user interfaces, particularly for single-page applications. I used React in the Scribble project to build the frontend, including interactive components like the chat interface. This experience taught me component-based architecture, state management, and how to create efficient, responsive user interfaces, significantly improving my frontend development capabilities.",logo:i.ReactJs,name:"React Js",category:"library"}),r({slug:"nodejs",color:"green",description:"A JavaScript runtime that allows JavaScript to run on the server. I employed Node.js for Scribble's backend, handling server-side operations and data management. Through this, I learned how to create scalable network applications and work with asynchronous programming in a server environment, broadening my full-stack development skills.",logo:i.NodeJs,name:"Node Js",category:"library"}),r({slug:"expressjs",color:"white",description:"A minimal and flexible Node.js web application framework. I used Express.js with Node.js in Scribble to set up routes and create APIs. This experience taught me how to structure a web application backend efficiently and create RESTful APIs, enhancing my ability to develop robust server-side applications.",logo:i.ExpressJs,name:"Express Js",category:"library"}),r({slug:"python",color:"blue",description:"A high-level, interpreted programming language known for its simplicity and versatility. I applied Python in my Data Analysis Engine to process large CSV files, calculate statistics, filter data, and generate visualizations. This project taught me efficient data processing techniques, how to handle large datasets, and ways to improve processing speed, significantly enhancing my data analysis skills.",logo:i.Python,name:"Python",category:"pro-lang"}),r({slug:"cpp",color:"blue",description:"A powerful, general-purpose programming language that extends C with object-oriented features. While not featured in my resume projects, I've used C++ extensively in game development with SDL. This experience helped me learn fundamental programming concepts, object-oriented principles, and how to create interactive software, providing a strong foundation for my programming skills.",logo:i.Cpp,name:"C++",category:"pro-lang"}),r({slug:"c",color:"blue",description:"A low-level programming language renowned for its efficiency and direct hardware access. I have utilized C in developing a 2D sidescroller game using SDL, which highlights my proficiency in the language. This experience has deepened my understanding of computer architecture and low-level programming concepts, significantly contributing to my growth as a programmer.",logo:i.C,name:"C",category:"pro-lang"}),r({slug:"php",color:"lightblue",description:"A server-side scripting language designed for web development. I utilized PHP in the Inform A Fish project for backend development, managing fish data and user contributions. This experience taught me server-side web development, database interactions, and how to handle user-generated content, improving my skills in creating dynamic, data-driven websites.",logo:i.PHP,name:"PHP",category:"pro-lang"})],m="Skills",h=(...e)=>c.filter(t=>e.includes(t.slug)),y=e=>{const t=[],o=[];return c.forEach(a=>{if(e.trim()&&!a.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!a.category){console.log(a.category),o.push(a);return}let s=t.find(g=>{var l;return g.category.slug===((l=a.category)==null?void 0:l.slug)});s||(s={items:[],category:a.category},t.push(s)),s.items.push(a)}),o.length!==0&&t.push({category:{name:"Others",slug:"others"},items:o}),t};export{y as a,h as g,c as i,m as t};