package functional;
import java.util.Scanner;

public class Program3 {
	public static void main(String[] args) {
		System.out.println("Enter a number");
		Scanner scanner=new Scanner(System.in);
		int year=scanner.nextInt();
		if((999<year)&&(year<10000)&&((year%4==0)||(year%400==0))&&(year%100!=0))
		{
			System.out.println("Leap Year");
		}
		else {
			System.out.println("not a Leap Year");
		}
		
	}

}
