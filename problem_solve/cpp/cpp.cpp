#include<bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int romanToInt(string s) {
        int ans = 0;

        for(int i=0;i<s.size();i++)
        {
             if(s[i]=='I')
             {
                 if(s[i]=='V') {ans+=4; i++;}
                 else if (s[i]=='X'){i++; ans+=9;}
                 else ans++;
             }
             else if(s[i]=='X')
             {
                  if(s[i]=='L') {ans+=40; i++;}
                 else if (s[i]=='C'){i++; ans+=90;}
                 else ans+=10;
             }
             else if(s[i]=='C')
             {
                  if(s[i]=='D') {ans+=400; i++;}
                 else if (s[i]=='M'){i++; ans+=900;}
                 else ans+=100;
             }
             else if(s[i]=='D') ans+=500;
             else if(s[i]=='L') ans+=50;
             else if(s[i]=='V') ans+=5;
             else ans+=1000;
    
        }
        return ans;
    }
};


int main()
{
    Solution st;
    int ans = st.romanToInt("MCMXCIV");
    cout<<ans<<endl;
}