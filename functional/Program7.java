package functional;

//import com.sun.tools.sjavac.server.SysInfo;

public class Program7 {
	public void gambler(int stake,int goal,int numOfTurns)
	{
		int win=0,loss=0;
		for(int i=1;i<=numOfTurns;i++)
		{
			double result=Math.random();
			System.out.println(result);
			if(result>0.5)
			{
				stake=stake+1;
				win=win+1;
				//System.out.println(win);
			}
			else
			{
				stake=stake-1;
				loss=loss+1;
			}
			if(stake==goal)
			{
				System.out.println("goal reached");
				System.out.println("number of turns to reach goal"+i);
				
			}
			if(stake==0)
			{
				System.out.println("No Stake Available");
				System.out.println("number of turns to 0 stake "+i);
				
			}
		}
		float winpercent=(float) (win*100*1.0/(win+loss));
		System.out.println(winpercent);
		System.out.println(stake);
		
		
		
	}
	public static void main(String[] args) {
		Program7 p=new Program7();
		p.gambler(5 ,10,5);
		
	}

}
