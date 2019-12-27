package functional;

import java.util.Scanner;

public class WindChill {
	
	double windChill(double t,double v) {
		if((t>50)||(v>120)||(v<3))
		{
			System.out.println("Invalid values of Temperature and Volume");
			return 0;
		}
		else
		{
		double w=35.74+(0.4275*t-35.75)*Math.pow(v, 0.16);
		return w;
		}
	}
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		WindChill wc=new WindChill();
		System.out.println("Enter the temperature");
		//Scanner scan=new Scanner(System.in);
		double t=scan.nextDouble();
		System.out.println("Enter the volume");
		double v=scan.nextDouble();
		double result=wc.windChill(t, v);
		
		if(result!=0.0)
		{
			System.out.println(result);
		}
		
		
	}

}
