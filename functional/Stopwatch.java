package functional;

import java.time.Duration;
import java.time.Instant;
import java.util.Scanner;

public class Stopwatch {
	void duration() {
		System.out.println("Enter 'START' to start the stopwatch");
		Scanner scan=new Scanner(System.in);
		String start=scan.next();
		Instant i=null,j=null;
		if(start.equalsIgnoreCase("start"))
		{
			i=Instant.now();
			System.out.println("Enter 'STOP' to  Stop the stopwatch");
			String stop=scan.next();
			if(stop.equalsIgnoreCase("stop"))
			{
				j=Instant.now();
			}
			else {
				System.out.println("Invalid Entry .... Enter STOP");
			}
			
		}
		else
		{
			System.out.println("Invalid Entry.... Enter START");
		}
		Duration difference=Duration.between(i, j);
		//System.out.println(difference);
		int milli=difference.toMillisPart();
		int second=difference.toSecondsPart();
		int minute=difference.toMinutesPart();
		int hour=difference.toHoursPart();
		System.out.println("printing in HH:MM:SS:MS format "+hour+":"+minute+":"+second+":"+milli);
		
		
		
	}
	public static void main(String[] args) {
		Stopwatch sw=new Stopwatch();
		sw.duration();
	}
	

}
