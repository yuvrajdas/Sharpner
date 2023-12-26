package ArrayList;

import java.util.*;

public class Arraylist {
    public static void main(String[] args) {
        /*
         * ArrayList : ArrayList is a Linear data structure. The speciality of ArrayList
         * is it's size is dynamic
         * We can add the data from front, last and from middle
         * 
         * Methods for Operations
         * 1. For adding the element       => add(idx, val) or add(val) if do not give idx it add from last
         * 2. For remove                   => remove(idx)
         * 3. For get the value            => get(idx)
         * 4. size of list                 => size()
         */

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(1);

        System.out.println(list);

        list.add(0, 10);
        System.out.println(list);

        list.add(1, 11);
        System.out.println(list);
        
        list.add(2, 9);
        System.out.println(list);
       list.remove(1);
               System.out.println(list);

    }
}