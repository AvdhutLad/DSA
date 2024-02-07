class cq
{
    constructor(maxcapacity)
    {
        this.data = Array(maxcapacity);
        this.capacity = maxcapacity;
        this.currentlength=0;
        this.front=-1;
        this.rear=-1;
    }
    isFull()
    {
        return this.currentlength==this.maxcapacity;
    }
    isEmpty()
    {
        return this.currentlength==0;
    }
    enqueue(data)
    {
        if(!this.isFull())
        {
            this.rear = (this.rear+1)%this.capacity;
            this.data[this.rear]=data;
            this.front=0;
            this.currentlength++;
            if(this.front==-1)
            {
                this.front==this.rear;
            }
        }
        return data;
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return null;
        }
        let temp = this.data[this.front];
        this.data[this.front]=null;
        this.front = (this.front+1)%this.capacity;
        this.currentlength--;
        if(this.isEmpty())
        {
            this.front=-1;
            this.rear=h-1;
        }
        return temp;
    }
    peek()
    {
        return this.data[this.front]
    }
}

const c = new cq(5);
console.log(c);
console.log("enqueue:")
c.enqueue(1);
console.log(c);
console.log("enqueue:")
c.enqueue(2);
console.log(c);

console.log("dequeue:")
c.dequeue();
console.log(c);
console.log("peek:")
console.log(c.peek())