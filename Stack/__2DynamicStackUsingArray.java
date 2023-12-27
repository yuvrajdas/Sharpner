package Stack;

public class __2DynamicStackUsingArray {
    
    int data[];
    int tos;

    __2DynamicStackUsingArray(int cap){
        data = new int[cap];
        tos = -1;
    }

    public void push(int val){
        if(tos == data.length-1){
            int nData[] = new int[data.length*2];
            for(int i=0; i<data.length; i++){
                nData[i] = data[i];
            }
            data = nData;
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
         __2DynamicStackUsingArray stk = new __2DynamicStackUsingArray(5);
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
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.display();
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.display();
        stk.size();
    }
}
