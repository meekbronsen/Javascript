import java.util.Arrays;

public class playground {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(getTotalEvenNumbers(5)));
    }

    private static int[] getTotalEvenNumbers( int limit ){
        var array = new int[limit];
        for (int i = 0; i < limit; i++ ){
            array[i] = i;
        }
        return array;
    }
}