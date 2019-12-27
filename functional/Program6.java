package functional;
import java.util.Scanner;

public class Program6 {
	public boolean isPrime(int a)
	{	int count=0;
		
		boolean flag;
		for(int i=1;i*i<=a;i++)
		{
			if(a%i==0)
			{
				count=count+1;
				//System.out.println(count);
			}
			
			
		}
		if(count==1)
		{
			flag=true;
		}
		else
		{
			flag=false;
		}
		return flag;
		
	}
		public static void main(String[] args) {
			Program6 p=new Program6();
			System.out.println("enter a number");
			Scanner scan=new Scanner(System.in);
			int number=scan.nextInt();
			for(int i=2;i<=number/2;i++)
			{
				boolean check=p.isPrime(i);
				if((number%i==0)&&(check==true))
				{
					System.out.println(i);
				}
			}
			
			
			}
		

}
