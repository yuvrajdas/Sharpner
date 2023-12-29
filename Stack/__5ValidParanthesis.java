package Stack;
import java.util.*;
public class __5ValidParanthesis {
    
    public static boolean isValid(String str){

        Stack<Character> stk = new Stack<>();

        for(int i=0; i<str.length(); i++){
            char ch = str.charAt(i);

            if(ch == '(' || ch == '{' || ch == '['){
                stk.push(ch);
            }else{
                if(stk.isEmpty() && (ch == '}' || ch ==']' || ch ==')')){
                    stk.push(ch);
                }else if(ch == ')' && stk.peek() == '('){
                    stk.pop();
                }else if(ch == '}' && stk.peek() == '{'){
                    stk.pop();
                }else if(ch == ']' && stk.peek() == '['){
                    stk.pop();
                }else{
                   return false;
                }
            }
        }

        if(stk.size()>0)
            return false;
        else 
            return true;
    }

    public static void main(String[] args) {
        String s = "(])";

        boolean res = isValid(s);
        System.out.println(res);
    }
}
