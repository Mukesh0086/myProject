package functional;
import java.util.Scanner;

public class Program4 {
	public static void main(String[] args) {
		System.out.println("enter a number");
		Scanner scan=new Scanner(System.in);
		int power=scan.nextInt();
		if((power>=0)&&(power<32))
		{
			for(int i=0;i<=power;i++)
			{
				System.out.println(Math.pow(2, i));
			}
		}
		else {
			System.out.println("number should be betwen 0 and 32");
		}
		
	}

}
