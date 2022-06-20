const CVData = {
  skills: [
    { "title": "HTML 5", "score": 4},
    { "title": "CSS 3", "score": 4},
    { "title": "Javascript", "score": 4},
    { "title": "Git & Github", "score": 4},
    { "title": "Vue.js", "score": 4},
    { "title": "React.js", "score": 4},
    { "title": "Next.js", "score": 3},
    { "title": "Typescript", "score": 3},
    { "title": "Phaser 3", "score": 2}
  ],
  experiences: [
    {
      "title": "Front-end Engineer",
      "time": "Mar. 2021－Aug. 2021",
      "company": "Enable Educational Technology Co., Ltd.",
      "location": "Taipei, Taiwan",
      "description": "Collaborated with developers, designers, and project managers to conceive product ideas and implement new features for the online education platform. Users include 930,000 students.",
      "contents": [
        "Implemented the game character information page and related reusable components using Vue.js with TypeScript. (Users can collect and select the online character)",
        "Developed a web browser game based on the Phaser 3 game framework. (similar to Candy Crush)",
        "Cleaned and refactored codebase about game question setting section, and fixed 5 minor bugs.",
        "Used GitLab with SourceTree for version control."
      ]
    },
    {
      "title": "Front-end Engineer",
      "time": "Jul. 2020－Feb. 2021",
      "company": "Tianxuan Technology Co., Ltd.",
      "location": "Taipei, Taiwan",
      "description":"Collaborated with developers, designers, and product managers to build new features for financial apps.",
      "contents": [
        "Implemented 35 App layouts and the front end of the company's own web portals using Vue.js.",
        "Developed a new referral function for inviting new friends to get bonuses.",
        "Use Bitbucket with SourceTree for version control."
      ]
    },
  ],
  projects: [
    {
      "id": 1, "title": "React.js Based Tetris Clone Application",
      "time": "Jun. 2022",
      "keywords": ["React"],
      "link": "http://react-s3-tetris-clone.s3-website-us-west-1.amazonaws.com/",
      "code": "https://github.com/wei30172/tetris-clone",
      "description": "Implement a Tetris clone with JavaScript and React.js. Automatic deploy App from GitHub to AWS S3 using CodeBuild.",
      "images": ["react-tetris1", "react-tetris2"]
    },
    {
      "id": 2, "title": "Next.js Based Modern Ecommerce Application",
      "time": "May. 2022",
      "keywords": ["React", "Next.js", "Sanity", "PayPal"],
      "link": "https://react-next-sanity-ecommerce-wei30172.vercel.app/",
      "code": "https://github.com/wei30172/react-next-sanity-ecommerce",
      "description": "Developed an E-commerce website with React, Next.js, and Sanity. Users can place orders and see order history.",
      "images": ["full-stack-ecommerce1", "full-stack-ecommerce2", "full-stack-ecommerce3", "full-stack-ecommerce4", "full-stack-ecommerce5", "full-stack-ecommerce6", "full-stack-ecommerce7", "full-stack-ecommerce8", "full-stack-ecommerce9"]
    },
    {
      "id": 3, "title": "Next.js Based Modern Blog Application ",
      "time": "Mar. 2022",
      "keywords": ["React", "Redux", "Next.js", "Tailwind CSS", "GraphQL"],
      "link": "https://react-next-blog-202203.netlify.app/",
      "code": "https://github.com/wei30172/react-next-blog",
      "description": "Used React, Next.js, Tailwind CSS, and GraphQL to build a blog Website with recent posts and categories.",
      "images": ["full-stack-web1", "full-stack-web2", "full-stack-web3", "full-stack-web4", "full-stack-web5"]
    },
    {
      "id": 4, "title": "MERN Social Media App",
      "time": "Feb. 2022",
      "keywords": ["React", "Redux", "Node.js", "Express", "MongoDB"],
      "link": "https://react-node-posts-202202.netlify.app/",
      "code": "https://github.com/wei30172/react-posts-client",
      "description": "Used React, Node.js, Express, and MongoDB to build a simple social media Website.",
      "images": ["MERN-web1", "MERN-web2", "MERN-web3", "MERN-web4", "MERN-web5", "MERN-web6"]
    },
    {
      "id": 5, "title": "React.js Based Shopping Cart",
      "time": "Jan. 2022",
      "keywords": ["React", "Redux", "TypeScript"],
      "link": "https://react-redux-ts-shoppingcart.vercel.app/",
      "code": "https://github.com/wei30172/react-redux-ts-shoppingcart",
      "description": "Built a simple E-commerce shopping cart with React, Redux, and TypeScript. Users can add products to the shopping cart and create an order.",
      "images": ["react-e-commerce1", "react-e-commerce2", "react-e-commerce3", "react-e-commerce4", "react-e-commerce5"]
    },
    {
      "id": 6, "title": "Memory Game",
      "time": "Nov. 2021",
      "keywords": ["React"],
      "link": "https://memory-game-react-bay.vercel.app/",
      "code": "https://github.com/wei30172/memory-game-react",
      "description": "Used React to build a memory game.",
      "images": ["react-memory-game1", "react-memory-game2"]
    },
    {
      "id": 7, "title": "Tic Tac Toe",
      "time": "Oct. 2021",
      "keywords": ["HTML", "CSS", "JavaScript"],
      "link": "https://wei30172.github.io/Tic_Tac_Toe/",
      "code": "https://github.com/wei30172/Tic_Tac_Toe",
      "description": "Used HTML, CSS, JavaScript to build a simple tic-tac-toe game.",
      "images": ["tic-tac-toe1", "tic-tac-toe2", "tic-tac-toe3"]
    }
  ]
}

export default CVData;