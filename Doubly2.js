/*4)Create doubly link list program and perform following operation:
a)insert node from end
b)delete node from front
code:-*/
class Node
{
    constructor(data)
    {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class Program4
{
    constructor(data)
    {
        const d = new Node(data);
        this.head =d;
        this.tail=d;
        this.lenght = 1;
    }
    push(data)
    {
        const d = new Node(data);
        if(!this.lenght)
        {
            this.head=d;
            this.tail=d;
            this.lenght=1;
        }
        else
        {
            this.tail.next=d;
            this.prev = this.tail;
            this.tail=d;
            this.lenght++;
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
const p4 = new Program4(10);
console.log(p4);
console.log("push:")
p4.push(20);;
console.log(p4);
console.log("pop:")
p4.pop();
console.log(p4)
