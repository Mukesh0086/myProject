package Algorithmic;

import java.util.Arrays;

public class Program1 {
	public static void main(String[] args) {
		Program1 p=new Program1();
		p.anagram("hea4tg", "earth");
		
	}
	public void anagram(String str,String str1)
	{
		StringBuffer sb=new StringBuffer();
		StringBuffer sb1=new StringBuffer();
		boolean flag=false;
		int length=str.length();
		int length1=str1.length();
		if(length!=length1)
		{
			System.out.println("not a anagram");
		}
		else{
			char []first=str.toCharArray();
			char[] second=str1.toCharArray();
			Arrays.sort(first);
			Arrays.sort(second);
			
			for(int i=0;i<length;i++)
			{
				char c=first[i];
				sb.append(c);
				char d=second[i];
				sb1.append(d);
				
			}
			System.out.println(sb);
			System.out.println(sb1);
			
			if(sb.toString().equals(sb1.toString()))
			{
				System.out.println("anagram");
				
			}
			else
			{
				System.out.println("not an anagram");
			}
		}
					
			
			
			
			
		
		
		
		//return flag;
	}

}
