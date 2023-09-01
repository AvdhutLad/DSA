class node{
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
        
    }
}
const root=new node(100);
console.log("Here is my root node", root);
root.left=new node(40);
root.right=new node(50);
root.left.right=new node(130);
root.left.left=new node(240);
root.right=new node(330);
root.right.left= new node(50);
console.log(JSON.stringify(root));
