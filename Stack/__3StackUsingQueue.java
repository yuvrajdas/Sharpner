package Stack;

import java.util.*;

public class __3StackUsingQueue {

    Queue<Integer> mainQ;
    Queue<Integer> helperQ;

    __3StackUsingQueue() {
        this.mainQ = new ArrayDeque<>();
        this.helperQ = new ArrayDeque<>();
    }

    public void push(int val) {
        mainQ.add(val);
    }

    public int pop() {
        while (mainQ.size() > 1) {
            helperQ.add(mainQ.remove());
        }

        int val = mainQ.remove();
        
        while (helperQ.size() > 0) {
            mainQ.add(helperQ.remove());
        }
        return val;
    }

    public int peek() {
        while (mainQ.size() > 1) {
            helperQ.add(mainQ.remove());
        }

        int val = mainQ.remove();
        helperQ.add(val);

        while (helperQ.size() > 0) {
            mainQ.add(helperQ.remove());
        }

        return val;
    }

    public void isEmpty(){
        if(mainQ.size()>0)
            System.out.println("False");
        else    
            System.out.println("True");
    }

    public void display(){
        System.out.println(mainQ);
    }
    public static void main(String[] args) {
        __3StackUsingQueue stk = new __3StackUsingQueue();
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.push(6);
        stk.display();
        System.out.println(stk.peek());
        System.out.println(stk.pop());
        stk.display();

    }
}
