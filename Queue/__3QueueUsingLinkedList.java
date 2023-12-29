package Queue;
import java.util.*;
public class __3QueueUsingLinkedList {
    
    LinkedList<Integer> list;

    __3QueueUsingLinkedList(){
        list = new LinkedList<>();    
    }

    public void add(int val){
        list.addLast(val);
    }

    public int remove(){
        return list.removeFirst();
    }

    public int peek(){
        return list.getFirst();
    }

    public boolean isEmpty(){
        return list.isEmpty();
    }
    
    public void display(){
        System.out.println(list);
    }

    public static void main(String[] args) {
        __3QueueUsingLinkedList que = new __3QueueUsingLinkedList();
        que.add(1);
        que.add(2);
        que.add(3);
        que.add(4);
        que.add(5);
        que.display();
        System.out.println(que.isEmpty());
        System.out.println(que.peek());
        System.out.println(que.remove());
        System.out.println(que.isEmpty());
        System.out.println(que.remove());
        que.display();
    }
}
