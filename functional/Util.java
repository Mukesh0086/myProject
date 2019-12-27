package functional;

import java.util.ArrayList;
import java.util.Arrays;

public class Util {
	public static boolean anagram(String str,String str1) {
		char[] first=str.toCharArray();
		char[] second=str1.toCharArray();
		Arrays.sort(first);
		Arrays.parallelSort(second);
		System.out.println(first);
		System.out.println(second);
		if(Arrays.equals(first, second))
				{
					return true;
				}
		else {
			return false;
		}
		
		
		
		
	}
	public static ArrayList prime(){
		
		ArrayList <Integer>prime =new ArrayList<Integer>();
		for(int i=2;i<=50;i++)
		{
			int count=0;
			int sqrt=(int) Math.sqrt(i);
			
			for(int j=1;j<=sqrt;j++)
			{
				if(i%j==0)
				{
					count=count+1;
					
				}
			}
			if(count==1)
			{
				prime.add(i);
				
			}
			
		}
		
		return prime;
	}
	public static ArrayList<Integer> specialCase(ArrayList<Integer> primeOutput)
	{
		ArrayList special =new ArrayList();
		
		for(Integer al:primeOutput)
		{
			int k=al;
			
			int sum=0,remainder=0;
			while(al>0) {
				remainder=al%10;
				sum=sum*10+remainder;
				al=al/10;
			}
			
			
			if(k==sum)
			{
				special.add(k);
			}
			
			
			
		}
		
		return special;
	}
	
	public static void main(String[] args) {
		boolean anagram=anagram("earth", "heart");
		System.out.println(anagram);
		ArrayList<Integer> primeOutput=prime();
		for(Integer p:primeOutput)
		{
			System.out.println(p);
		}
		System.out.println("special output");
		ArrayList<Integer> specialOutput=specialCase(primeOutput);
		for(Integer s:specialOutput)
		{
			System.out.println(s);
		}
	}
	

}
