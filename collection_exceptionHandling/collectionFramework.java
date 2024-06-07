// <!--Title:collection implementation
// Author:Saranya R
// Created date:31-05-2024-->
import java.util.*;

public class collectionFramework {
    public static void main(String[] args) {
        // List
        List<Integer> list = new LinkedList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        Collections.sort(list);
        System.out.println(list);
        System.out.println(list.lastIndexOf(20));
        System.out.println( list.contains(10));
        list.remove(Integer.valueOf(20)); 
        System.out.println("After removal: " + list);
        System.out.println( list.isEmpty());
        list.clear();
        System.out.println("After clearing: " + list);

        // Map
        Map<String, Integer> map = new HashMap<>();
        map.put("key1", 10);
        map.put("key2", 20);
        System.out.println( map.containsKey("key1"));
        System.out.println( map.containsValue(20));
        map.remove("key2"); 
        System.out.println(map);
        System.out.println(map.isEmpty());
        map.clear(); 
        System.out.println(map);

        // Vector
        Vector<Integer> vector = new Vector<>();
        vector.add(10);
        vector.add(20);
        vector.add(30);
        Collections.sort(vector); 
        System.out.println(vector);
        System.out.println( vector.lastIndexOf(20));
        System.out.println(vector.contains(10));
        vector.remove(Integer.valueOf(20)); 
        System.out.println(vector);
        System.out.println(vector.isEmpty());
        vector.clear(); 
        System.out.println( vector);

        // Stack
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack.contains(20));
        System.out.println(stack.lastIndexOf(10));
        System.out.println(stack.peek());
        stack.pop(); 
        System.out.println(stack);
        System.out.println(stack.isEmpty());
        stack.clear(); 
        System.out.println(stack);

        // Queue
        Queue<Integer> queue = new LinkedList<>();
        queue.add(10);
        queue.add(20);
        queue.add(30);
        System.out.println(queue.contains(20));
        System.out.println(queue.size());
        System.out.println(queue.peek());
        queue.remove(); 
        System.out.println(queue);
        System.out.println(queue.isEmpty());
        queue.clear(); 
        System.out.println(queue);
    }
}
