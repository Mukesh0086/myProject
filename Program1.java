package functional;
import java.util.Scanner;

public class Program1 {
	public static void main(String[] args) {
		System.out.println("enter the user name");
		Scanner scan =new Scanner(System.in);
		String name=scan.next();
		int length=name.length();
		if(length>=3)
		{
			System.out.println("Hello "+name+" How are you?");
		}
		else
		{
			System.out.println("name is should be atleast 3 characters");
		}
		
	}

}
