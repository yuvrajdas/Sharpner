package Stack;

public class __1StackUsingArray {
    
    int data[];
    int tos;

    __1StackUsingArray(int cap){
        tos = -1;
        data = new int[cap];
    }

    public void push(int val){
        if(tos == data.length-1){
            System.out.println("Stack Overflow");
            return;
        }
        tos++;
        data[tos] = val;
    }

    public int pop(){
        if(tos<0){
            System.out.println("Stack Underflow");
            return -1;
        }else{
            int val = data[tos];
            tos--;
            return val;
        }
    }

    public void peek(){
        System.out.println(data[tos]);
    }

    public void size(){
        System.out.println(tos+1);
    }

    public void isEmpty(){
        if(tos<0)
            System.out.println("True");
        else    
            System.out.println("False");
    }

    public void display(){
        System.out.print("[");
        for(int i=0; i<=tos; i++){
            System.out.print(" "+data[i]+" ");
        }
        System.out.print("]");
    }


    public static void main(String[] args) {
        /*
         * Stack : Stack is a linear data structure that add remove and get the data from top and
         * Time Complexity for all is O(1)
         * 
         * Method in Stack
         * 1. For adding data   => push(val)
         * 2. For remove data   => pop()
         * 3. For geting data   => peek()
         * 4. For size of stack => size()
         * 5. Empty check       => isEmpty()
         * 
        */
        __1StackUsingArray stk = new __1StackUsingArray(5);
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.display();
        stk.peek();
        stk.pop();
        stk.display();
        stk.peek();
    }
}
