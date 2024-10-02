package Problem2;

public class Problem2 {

    public static void main(String[] args) {
        int num1 = 0, num2 = 1;
        int limit = 4000000;

        System.out.println("Fibonacci Series: ");
        System.out.println(num1);
        System.out.println(num2);

        int sum = 0;
        while (true) {
            int num3 = num1 + num2;
            if (num3 > limit) {
                break;
            }
            if (num3 % 2 == 0) {
                System.out.println(num3);
                sum += num3;
            }
            num1 = num2;
            num2 = num3;
        }

        System.out.println("\nTotal Sum of Even Values = " + sum);
    }
}
