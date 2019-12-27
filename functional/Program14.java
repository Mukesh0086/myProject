package functional;

import java.util.Scanner;

public class Program14 {
	public static void main(String[] args) {
		System.out.println("Welcome to classic tic tac toe");
		String[][] tictac=new String[3][3];
		Scanner scan=new Scanner(System.in);
		int x,y;
		int col=0;
		for(int i=0;i<9;i++)
		{
			if(i%2==0) {System.out.println("Enter co ordinates user");
				x=scan.nextInt();
				y=scan.nextInt();
				tictac[x][y]="*"+" ";
				//System.out.println(tictac[x][y]);
				continue;
			}
			else 
				{
				System.out.println("Enter co ordinates user2");
				}
				x=scan.nextInt();
				y=scan.nextInt();
				tictac[x][y]="o"+" ";
			
		}
		
		for(int i=0;i<3;i++)
		{
			for(int j=0;j<3;j++)
			{
				System.out.print(tictac[i][j]);
			}
			System.out.println("");
		}
		int count=0;
		
		for(int i=0;i<3;i++)
		{
			int j=0;
				if(tictac[i][j].equals(tictac[i][j+1])&&tictac[i][j].equals(tictac[i][j+2]))
				{
					if(tictac[i][j].equals("*"))
					{
						System.out.println("user1 wins");
						count++;
					}
					else if(tictac[i][j].equals("o"))
					{
						System.out.println("user2 wins");
						count++;
					}}
				}
					if(count==0){
						System.out.println("DRAW");
					}
				}
				
			
		
		
		
		
	
	
	
	}


