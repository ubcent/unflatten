'use strict';

module.exports = (nodes) => {
  let map = {}, node, roots = [];
  for (let i = 0; i < nodes.length; i += 1) {
    node = nodes[i];
    node.children = [];
    map[node.id] = i;
    if (node.parentId != 0) {
      nodes[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
};