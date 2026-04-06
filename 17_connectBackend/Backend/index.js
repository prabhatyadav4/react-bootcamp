import express from "express";

const app = express();

app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "JavaScript Joke",
      content:
        "Why did the JavaScript developer go broke? Because he used var instead of let and couldn't keep track of his money.",
    },
    {
      id: 3,
      title: "Backend Joke",
      content:
        "Why did the server break up with the database? Because it had too many relationships.",
    },
    {
      id: 4,
      title: "CSS Joke",
      content:
        "Why is CSS so frustrating? Because everything is either a flex or a mess.",
    },
    {
      id: 5,
      title: "React Joke",
      content:
        "Why did the React component feel lonely? Because it didn't have any props.",
    },
    {
      id: 6,
      title: "Git Joke",
      content:
        "Why did the developer go broke? Because he lost his branch and couldn’t commit.",
    },
    {
      id: 7,
      title: "Debugging Joke",
      content:
        "Debugging is like being a detective in a crime movie where you are also the murderer.",
    },
    {
      id: 8,
      title: "HTML Joke",
      content:
        "Why did the HTML file go to therapy? It had too many unresolved tags.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
