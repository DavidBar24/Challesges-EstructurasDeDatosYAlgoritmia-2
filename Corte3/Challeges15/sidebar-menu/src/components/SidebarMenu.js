import React from 'react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ node }) => {
  return (
    <li>
      <Link to={node.link}>{node.title}</Link>
      {node.children.length > 0 && (
        <ul>
          {node.children.map((child, index) => (
            <MenuItem key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const SidebarMenu = ({ rootNode }) => {
  return (
    <div className="sidebar">
      <ul>
        {rootNode.children.map((child, index) => (
          <MenuItem key={index} node={child} />
        ))}
      </ul>
    </div>
  );
};