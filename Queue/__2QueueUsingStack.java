package Queue;
import java.util.*;

public class __2QueueUsingStack {
    
    Stack<Integer> mainS;
    Stack<Integer> helperS;

    __2QueueUsingStack(){
        mainS = new Stack<>();
        helperS = new Stack<>();
    }

    public void add(int val){
        mainS.add(val);
    }

    public int peek(){

        while (mainS.size()>1) {
            helperS.push(mainS.pop());
        }
        int peekVal = mainS.pop();
        helperS.push(peekVal);

        while (helperS.size()>0) {
            mainS.push(helperS.pop());
        }

        return peekVal;

    }

    public static void main(String[] args) {
        
    }
}
