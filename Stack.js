class Node
{
    constructor(data)
    {
        this.data= data;
        this.next = null;
    }
}
class Stack
{
    constructor(data)
    {
        const d = new Node(data);
        this.top =d;
        this.length =1;
    }
    push(data)
    {
        const d = new Node(data);
        if(!this.length)
        {
            this.top = d;
        }
        else
        {   d.next = this.top;
            this.top = d;
        }
        this.length++;

    }
    pop()
    {
        if(this.length==0)
        {
            return undefined;
        }
        if(this.length==1)
        {
            this.top = null;
        }
        else
        {
            let temp =this.top;
            this.top= temp.next;
            temp.next=null;
        }
        this.length--;
    }
    
    peek()
    {
        return this.top;
    }
}
const newStack = new Stack(100);
console.log(newStack);
console.log("push:")
newStack.push(200);
console.log(newStack);

console.log("push:")
newStack.push(300);
console.log(newStack);

console.log("peek");
console.log(newStack.peek());

console.log("pop");
newStack.pop();
console.log(newStack);

console.log("peek");
console.log(newStack.peek());
