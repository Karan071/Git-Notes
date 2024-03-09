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
        if(n % lastDigit == 0) count++;
    }
    return count;
}
int main(){
    int n;
    cin >> n;
    cout << countDigits(n);
}