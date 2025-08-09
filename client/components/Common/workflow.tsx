"use client";

import React, { useEffect } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
  type Node,
  type Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const horizontalLayout: Node[] = [
  {
    id: "start",
    type: "input",
    data: { label: "Start" },
    position: { x: 0, y: 150 },
  },
  {
    id: "title_creation",
    data: { label: "Title Creation" },
    position: { x: 200, y: 150 },
  },
  {
    id: "content_generation",
    data: { label: "Content Generation" },
    position: { x: 400, y: 150 },
  },
  {
    id: "content_validation",
    data: { label: "Content Validation (85%)" },
    position: { x: 550, y: 40 },
  },
  {
    id: "image_prompt_generation",
    data: { label: "Image Prompt Generation (90%)" },
    position: { x: 900, y: 40 },
  },
  {
    id: "image_generation",
    data: { label: "Image Generation" },
    position: { x: 1100, y: 150 },
  },
  {
    id: "end",
    type: "output",
    data: { label: "End" },
    position: { x: 1300, y: 150 },
  },
];

const verticalLayout: Node[] = horizontalLayout.map((node, idx) => ({
  ...node,
  position: { x: node.id === "content_validation" ? 250 : 150, y: idx * 120 },
}));

const initialEdges: Edge[] = [
  { id: "e1", source: "start", target: "title_creation", animated: true },
  {
    id: "e2",
    source: "title_creation",
    target: "content_generation",
    animated: true,
  },
  {
    id: "e3",
    source: "content_generation",
    target: "content_validation",
    animated: true,
  },
  {
    id: "e4",
    source: "content_validation",
    target: "image_prompt_generation",
    animated: true,
    style: { stroke: "blue", strokeWidth: 2 },
  },
  {
    id: "e5",
    source: "image_prompt_generation",
    target: "image_generation",
    animated: true,
    style: { stroke: "purple", strokeWidth: 2 },
  },
  { id: "e6", source: "image_generation", target: "end", animated: true },
];

const WorkflowExample = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(horizontalLayout);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < 768;
      setNodes(mobile ? verticalLayout : horizontalLayout);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [setNodes]);

  const onConnect: OnConnect = (connection) =>
    setEdges((eds) => addEdge(connection, eds));

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowExample;
