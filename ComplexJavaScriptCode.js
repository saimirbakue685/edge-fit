/* 
   Filename: ComplexJavaScriptCode.js
   Description: This code implements a complex and elaborate website feature that allows users to create, modify, and collaborate on mind maps.
*/

// Global variables
let mindMapData = {
  nodes: [],
  connections: [],
};

// Function to create a new node
function createNode(id, content, x, y) {
  let node = {
    id: id,
    content: content,
    x: x,
    y: y,
  };
  mindMapData.nodes.push(node);
}

// Function to create a new connection between nodes
function createConnection(sourceNodeId, targetNodeId) {
  let connection = {
    sourceNodeId: sourceNodeId,
    targetNodeId: targetNodeId,
  };
  mindMapData.connections.push(connection);
}

// Function to render the mind map on the screen
function renderMindMap() {
  // Clear previous rendering
  clearScreen();

  // Render nodes
  for (let node of mindMapData.nodes) {
    let nodeElement = document.createElement("div");
    nodeElement.className = "node";
    nodeElement.style.left = node.x + "px";
    nodeElement.style.top = node.y + "px";
    nodeElement.innerHTML = node.content;
    document.body.appendChild(nodeElement);
  }

  // Render connections
  for (let connection of mindMapData.connections) {
    let sourceNode = getNodeById(connection.sourceNodeId);
    let targetNode = getNodeById(connection.targetNodeId);
    let connectionElement = document.createElement("div");
    connectionElement.className = "connection";
    connectionElement.style.left = sourceNode.x + "px";
    connectionElement.style.top = sourceNode.y + "px";
    connectionElement.style.width = getDistance(sourceNode, targetNode) + "px";
    document.body.appendChild(connectionElement);
  }
}

// Function to clear the screen
function clearScreen() {
  let nodes = document.getElementsByClassName("node");
  while (nodes.length > 0) {
    nodes[0].parentNode.removeChild(nodes[0]);
  }
  let connections = document.getElementsByClassName("connection");
  while (connections.length > 0) {
    connections[0].parentNode.removeChild(connections[0]);
  }
}

// Function to get a node by its ID
function getNodeById(id) {
  for (let node of mindMapData.nodes) {
    if (node.id === id) {
      return node;
    }
  }
  return null;
}

// Function to calculate the distance between two nodes
function getDistance(node1, node2) {
  let dx = node2.x - node1.x;
  let dy = node2.y - node1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  renderMindMap();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createNode(
      Date.now().toString(),
      "New Node",
      window.innerWidth / 2,
      window.innerHeight / 2
    );
    renderMindMap();
  }
});

document.addEventListener("mousedown", function (event) {
  let selectedNode = null;
  for (let node of mindMapData.nodes) {
    let nodeElement = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    if (nodeElement.classList.contains("node")) {
      selectedNode = node;
      break;
    }
  }
  if (selectedNode) {
    document.addEventListener("mousemove", moveNode);

    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", moveNode);
    });
  }
});

function moveNode(event) {
  // Update node's position
  // Code for updating node position goes here
  renderMindMap();
}

// Initialization
createNode("1", "Node 1", 100, 100);
createNode("2", "Node 2", 300, 100);
createNode("3", "Node 3", 200, 300);

createConnection("1", "2");
createConnection("1", "3");

renderMindMap();