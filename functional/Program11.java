package functional;

import java.util.Scanner;

public class Program11 {
	public void euclidian(double x,double y){
		double euclidian=Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2));
		System.out.println("The euclidian distance between the origin and given point is "+euclidian);
		
	}
	public static void main(String[] args) {
		Program11 p=new Program11();
		System.out.println("enter x co ordinate");
		Scanner scan=new Scanner(System.in);
		int x=scan.nextInt();
		int y=scan.nextInt();
		p.euclidian(x, y);
	}

}
