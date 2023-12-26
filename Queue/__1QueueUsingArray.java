package Queue;

public class __1QueueUsingArray {

    int data[];
    int size;
    int front;

    __1QueueUsingArray(int cap) {
        data = new int[cap];
        size = 0;
        front = 0;
    }

    public void add(int val) {
        if (size == data.length) {
            System.out.println("Queue Overflow");
            return;
        } else {
            int rear = (front + size) % data.length;
            data[rear] = val;
            size++;
        }
    }

    public int remove() {
        if (size == 0) {
            System.out.println("Queue Underflow");
            return -1;
        } else {
            int rVal = data[front];
            front = (front + 1) % data.length;
            size--;
            return rVal;
        }
    }

    public void peek() {
        System.out.println(data[front]);
    }

    public void size() {
        System.out.println(size);
    }

    public void display() {
        System.out.print("[");
        for (int i = 0; i < size; i++) {
            int idx = (front + i) % data.length;
            System.out.print(" " + data[idx] + " ");
        }
        System.out.print("]");
        System.out.println();
    }

    public static void main(String[] args) {

        /*
         * Queue : Queue is linear data structure workd on FIFO machanism, it add the data from rear and remove from front, it has following method 
         * 
         * 1. add()
         * 2. remove()
         * 3. peek()
         * 4. isEmpty()
         */

        __1QueueUsingArray que = new __1QueueUsingArray(5);
        que.add(1);
        que.add(2);
        que.add(3);
        que.add(4);
        que.add(5);
        que.display();
        que.peek();
        que.remove();
        que.remove();
        que.remove();
        que.remove();
        que.display();
        que.peek();
        que.add(1);
        que.display();
        que.peek();
    }
}