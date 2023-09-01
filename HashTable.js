class HashTable {
    constructor() {
      this.table = new Array(137);
    }
  
    hash(string) {
      let total = 0;
      for (let i = 0; i < string.length; i++) {
        total += string.charCodeAt(i);
      }
      return total % this.table.length;
    }
  
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  
    remove(key) {
      const index = this.hash(key);
      delete this.table[index];
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
          console.log(i + ": " + this.table[i]);
        }
      }
    }
  }
  const table = new HashTable();
  table.set("Avdhut", "Mayur");
  table.set("Aniruddha", "Patil");
  table.display(); 
  table.get("Avdhut"); 
  table.remove("Avdhut");
  table.display();
  