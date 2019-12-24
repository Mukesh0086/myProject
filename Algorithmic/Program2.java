package Algorithmic;

public class Program2 {
	public static void main(String[] args) {
		int count=0,a=0;
		for(int i=2;i<=1000;i++)
		{
			for(int j=1;j<Math.sqrt(i);j++)
			{
				if(i%j==0)
				{
					count++;
					a=i;
				}
			}
			
		}
		if(count==1)
		{
			System.out.println(a);
		}
	}
}
