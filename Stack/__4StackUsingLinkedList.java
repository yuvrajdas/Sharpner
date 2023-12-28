package Stack;
import java.util.*;
public class __4StackUsingLinkedList {
    
    LinkedList<Integer> list;

    __4StackUsingLinkedList(){
        list = new LinkedList<>();
    }

    public void push(int val){
        list.addLast(val);
    }
    
    public int pop(){
       return list.removeLast();
    }

    public int peek(){
        return list.getLast();
    }

    public void isEmpty(){
        System.out.println(list.isEmpty());
    }

    public void display(){
        System.out.println(list);
    }
    public static void main(String[] args) {
        __4StackUsingLinkedList stk = new __4StackUsingLinkedList();
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.display();
        System.out.println(stk.peek());
        System.out.println(stk.pop());
        stk.display();
        stk.isEmpty();
    }
}

 