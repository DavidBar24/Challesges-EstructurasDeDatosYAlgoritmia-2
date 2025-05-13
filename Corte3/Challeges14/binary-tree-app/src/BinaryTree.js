import { Node } from './Node';
import './BinaryTree.css';

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertar(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

    contains(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;
        return this.contains(value, node.left) || this.contains(value, node.right);
    }

    preOrder(node = this.root, result = []) {
        if (!node) return result;
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }

    inOrder(node = this.root, result = []) {
        if (!node) return result;
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
        return result;
    }

    postOrder(node = this.root, result = []) {
        if (!node) return result;
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.value);
        return result;
    }
    /*Si se quiere llamar por la consola se tiene que hacer esto
    preOrder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
    despues modificar algunos parametro de TreeVisualizer.jsx
    */
}