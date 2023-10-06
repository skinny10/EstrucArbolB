class Node {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(valor) {
        const newNode = new Node(valor);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (valor < currentNode.valor) {
                    if (currentNode.izquierda === null) {
                        currentNode.izquierda = newNode;
                        break;
                    }
                    currentNode = currentNode.izquierda;
                } else {
                    if (currentNode.derecha === null) {
                        currentNode.derecha = newNode;
                        break;
                    }
                    currentNode = currentNode.derecha;
                }
            }
        }
    }

    buscar(valor) {
        const coincidencias = [];
        this.buscarEnSubarbol(this.root, valor, coincidencias);
        return coincidencias;
    }

    buscarEnSubarbol(node, valor, coincidencias) {
        if (node === null) {
            return;
        }

        if (valor === node.valor) {
            coincidencias.push(node.valor);
        }

        if (valor < node.valor) {
            this.buscarEnSubarbol(node.izquierda, valor, coincidencias);
        } else {
            this.buscarEnSubarbol(node.derecha, valor, coincidencias);
        }
    }
}

const tree = new BinaryTree();
tree.insert(3);
tree.insert(1);
tree.insert(2);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree.buscar(3));
console.log(tree.buscar(4));
console.log(tree.buscar(7));




