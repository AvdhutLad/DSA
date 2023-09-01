class node{
    constructor(value){
        // const newnode = new node(value);
        this.value=value;
        this.prev= null;
        this.next=null;
    }
}
class doubly{
    constructor(value){
        const newnode = new node(value);
        this.head=newnode;
        this.tail=newnode;
        this.length=1;
    }
   
    add_front(value){
        const newnode = new node(value);

        if(!this.length){
            this.head=newnode;
            this.tail=newnode;
        }
       else{
        this.head.prev=newnode;
        // newnode.prev=this.head;
        newnode.next=this.head;   
        this.head=newnode;  
        newnode.prev=null;                                                    
        }
        this.length++;
        return this;
}
  delete_front(){
    let temp = this.head;
    if(!this.length) return undefined;
    else if(this.length==1){
        this.head=null;
        this.tail=null;
    }
    else{
        this.head.next.prev=null;
        this.head=temp.next;
        }
        this.length--;
        return temp;
  }
}
const d1 = new doubly(100);
d1.add_front(200);
d1.add_front(300);
d1.add_front(400);
console.log(d1);
d1.delete_front();
console.log(d1);
