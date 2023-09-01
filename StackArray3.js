class StackArray
{
    constructor(size)
    {
        this.data=Array(size);
        this.capacity=size;
        this.length=0;

        this.top=-1;
    }

    isFull()
    {
        return this.length===this.capacity;
    }
    isEmpty()
    {
        return this.length===0;
    }

    push(data)
    {
        if(!this.isFull())
        {
            this.top++;
            this.data[this.top]=data;
            this.length++;
        }
        else
        {
            console.log("Overflow");
        }
    }

    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else
        {
            let temp=this.data[this.top];
            this.data[this.top]=null;
            this.top--;
            this.length--;

            return temp;
        }
    }
}

const st=new StackArray(5);
st.push('a');
st.push('b');
st.push('c');
st.push('d');
st.push('e');

console.log(st);
 for(let i=0;i<5;i++)
 {
    let a=st.pop();
    console.log(a);
 }
