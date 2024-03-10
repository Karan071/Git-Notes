#include <bits/stdc++.h>
using namespace std;
int countDigits(int n){
    int temp = n, count = 0;
    while(temp > 0){
        temp = temp / 10;
        count++;
    }
    return count;
}
int countEvenDigit(int n){
    int count = 0, temp = n;
    while(temp > 0){
        int lastDigit = temp % 10;
        temp = temp / 10;
        if(lastDigit != 0 && n % lastDigit == 0) count++;
    }
    return count;
}
int reverseDigit(int n){
    int temp = n, revDigit = 0;
    while(temp > 0){
        int lastDigit = temp % 10;
        revDigit  = (revDigit * 10) + lastDigit;
        temp = temp / 10;
    }
    return revDigit;

}
bool checkPalindrome(int num){
    int temp = num, revDigit = 0;
    while(temp > 0) {
        int lastDigit = temp % 10;
        revDigit = revDigit * 10 + lastDigit;
        temp /= 10;
    }
    return (num == revDigit);
}
int naiveGcd(int num1, int num2){
    int result = 0;
    for(int i = 1; i <= min(num1,num2); i++){
        if(num1 % i == 0 && num2 % i == 0){
            result = i;
        }
    }
    return result;
}
int main(){
    int n,x;
    cin >> n >> x;
    

}