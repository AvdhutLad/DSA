class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class Singly
{
    constructor(data)
    {
        const d = new Node(data);
        this.head = d;
        this.tail =d;
        this.length = 1;

    }
    push(data)
    {
        const d = new Node(data);
        if(!this.length)
        {
            this.head = d;
            this.tail =d;
            this.length = 1;
        }
        else
        {
            this.tail.next = d;
            this.tail= d;
            this.length++;
        }
    }
    pop()
    {
        if(!this.length)
        {
            return undefined;
        }
        if(this.length==1)
        {
            this.head=null;
            this.tail=null;
        }
        else
        {
            let temp = this.head;
            let prev = this.head;
            while(temp.next)
            {
                prev = temp;
                temp = temp.next;
            }
            this.tail=prev;
            this.tail.next =null;
            this.length--;
        }

    }
}
const p1 = new Singly(100);
p1.push(10);
console.log("push:")
p1.push(20);
console.log(p1);
console.log("push:")
p1.push(30);
console.log(p1);
console.log("pop:")
p1.pop();
console.log(p1);
console.log("pop:")
p1.pop();
console.log(p1);
