package functional;

import java.util.Scanner;

public class Program10 {
		public static void main(String[] args) {
			int count=0;
			System.out.println("enter number");
			
			Scanner scan=new Scanner(System.in);
			int num=scan.nextInt();
			for(int i=1;i<=num;i++)
			{
				for(int j=1;j<=num;j++)
				{
					for(int k=-5;k<=num;k++)
						
					{
						if((i+j+k)==0)
						{
							count=count+1;
							System.out.println("found"+i+j+k);
						}
					}
				}
			}System.out.println(count);
		
			
		}

}
