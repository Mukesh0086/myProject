package functional;
import java.util.Scanner;

public class Program5 {
	public static void main(String[] args) {
		System.out.println("Enter the value of n");
		Scanner scan=new Scanner(System.in);
		int number=scan.nextInt();
		int a=1,d=1;
		int nthterm=a+(number-1)*d;
		System.out.println("nth harmonic term is "+1.0*1/nthterm);
	}

}
