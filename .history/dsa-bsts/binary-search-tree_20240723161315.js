class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (!node) return new Node(val);
    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else {
      node.right = this.insertRecursively(val, node.right);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return undefined;
    if (val === node.val) return node;
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let values = [];
    function traverse(node) {
      if (node) {
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return values;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let values = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let values = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        values.push(node.val);
      }
    }
    traverse(this.root);
    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return [];
    const nodeValues = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      nodeValues.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return nodeValues;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    const reportBalanced = (node) => {
      if (!node) return [true, 0];

      const [leftBalanced, leftHeight] = reportBalanced(node.left);
      const [rightBalanced, rightHeight] = reportBalanced(node.right);

      const balanced =
        leftBalanced &&
        rightBalanced &&
        Math.abs(leftHeight - rightHeight) <= 1;
      const height = Math.max(leftHeight, rightHeight) + 1;

      return [balanced, height];
    };
    return reportBalanced(this.root)[0];
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    const findMax = (node) => {
      while (node.right) {
        node.right;
      }
      return node;
    };
    if (!this.root) return null;

    let current = this.root;
    let parent = null;

    while (current.right) {
      parent = current;
      current = current.right;
    }
    if (current.left) {
      return this.findMax(current.left).val;
    } else if (parent) {
      return parent.val;
    }
    return null;
  }
}

module.exports = BinarySearchTree;
