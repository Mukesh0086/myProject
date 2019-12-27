package functional;
import java.util.Scanner;

public class Program2 {
	public static void main(String[] args) {
		System.out.println("enter the number of flips");
		Scanner scan=new Scanner(System.in);
		int flips=scan.nextInt();
		int head=0,tail=0;
		for(int i=0;i<flips;i++) {
			float randomNumber=(float) Math.random();
			System.out.println(randomNumber);
			if(randomNumber>0.5)
			{
				head=head+1;
			}
			else
			{
				tail=tail+1;
			}
			
		}
		
		
		
		
		float headPercentage=1.0f*(head*100)/flips;
		float tailPercentage=1.0f*(tail*100)/flips;
		
		
		
		
		System.out.println("Head Percentage"+headPercentage);
		System.out.println("Tail Percentage"+tailPercentage);
		
		
		
		
		
		
		
		
		
	}

}
