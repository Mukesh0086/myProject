package lambda_functions;

import java.util.Scanner;

public class firstlambda {

		public static void main(String[] args) {
			Scanner scan=new Scanner(System.in);
			
			StringConcat stringLambda=(s1,s2)->s1+" "+s2;
			System.out.println("enter first string");
			String s1=scan.nextLine();
			System.out.println("enter second string");
			String s2=scan.nextLine();
			String result=stringLambda.stringconcat(s1, s2);
			System.out.println(result);
			
		}
	
}
interface StringConcat{
	String  stringconcat(String str,String str1);
	
}
