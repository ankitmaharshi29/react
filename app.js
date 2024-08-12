const parent= React.createElement("div",{id:"abc"},React.createElement("div",{id:"child"},React.createElement("h1",{},"hello react")));

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent)

 