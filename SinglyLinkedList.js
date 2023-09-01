class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class Program1
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
            d.next = this.head;
            this.head=d;
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
            this.head=temp.next
            temp.next =null;
            this.length--;
        }

    }
}
const p1 = new Program1(10);
console.log(p1);
p1.push(20);
console.log(p1);
p1.push(30);
console.log(p1);
p1.push(40);
console.log(p1);
p1.pop();
console.log(p1);
p1.pop();
console.log(p1);
