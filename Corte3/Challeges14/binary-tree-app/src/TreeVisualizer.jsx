import React, { useState } from 'react';
import { BinaryTree } from './BinaryTree';
import Tree from 'react-d3-tree';


const TreeVisualizer = () => {
    const [tree] = useState(new BinaryTree());
    const [inputValue, setInputValue] = useState('');
    const [treeData, setTreeData] = useState({});
    const [traversalResult, setTraversalResult] = useState([]);
/*
Para uso de la consola se debe tener este

const TreeVisualizer = () => {
  const [tree] = useState(new BinaryTree());
  const [inputValue, setInputValue] = useState('');
  const [treeData, setTreeData] = useState({});

*/ 

  const convertToD3Format = (node) => {
    if (!node) return null;
    return {
      name: node.value.toString(),
      children: [
        convertToD3Format(node.left),
        convertToD3Format(node.right),
      ].filter(Boolean),
    };
  };

  const handleInsert = () => {
    tree.insertar(Number(inputValue));
    setTreeData(convertToD3Format(tree.root));
    setInputValue('');
  };

  const handleTraversal = (type) => {
        let result;
        switch(type) {
            case 'preorder':
                result = tree.preOrder();
                break;
            case 'inorder':
                result = tree.inOrder();
                break;
            case 'postorder':
                result = tree.postOrder();
                break;
            default:
                result = [];
        }
        setTraversalResult(result);
    };

  return (
    <div>
            <div className="controls">
                <input 
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleInsert}>Insertar</button>   
                <button onClick={() => handleTraversal('preorder')}>Preorden</button>
                <button onClick={() => handleTraversal('inorder')}>Inorden</button>
                <button onClick={() => handleTraversal('postorder')}>Postorden</button>
            </div>

            <div style={{ height: '60vh', width: '100%' }}>
                {tree.root && <Tree data={treeData} orientation="vertical"/>}
            </div>

            <div className="traversal-results">
                <h3>Recorrido actual:</h3>
                <div className="traversal-path">
                    {traversalResult.join(' → ')}
                </div>
            </div>
        </div>
  );
};

/* Este complementa finalmente el codigo para el uso de la consola (se elimina la parte de ariba y queda para usar lo de este comentario)
    const handleInsert = () => {
    tree.insert(Number(inputValue));
    setTreeData(convertToD3Format(tree.root));
    setInputValue('');
  };

  return (
    <div>
      <div style={{ height: '100vh', width: '100%' }}>
        {tree.root && <Tree data={treeData} orientation="vertical"/>}
      </div>
      
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleInsert}>Insertar</button>
        <button onClick={() => tree.inOrder()}>Inorder</button>
        <button onClick={() => tree.preOrder()}>Preorder</button>
        <button onClick={() => tree.postOrder()}>Postorder</button>
      </div>
    </div>

*/

export default TreeVisualizer;