#include <bits/stdc++.h>
using namespace std;
void pattern1(int n){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            cout << " * ";
        }
        cout << "\n";
    }
}
void pattern2(int n){
    for(int i = 0; i <= n; i++){
        for(int j = 0; j < i; j++){
            cout << "* ";
        }
        cout << "\n";
    }
}
void pattern3(int n){
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            cout << j;
        }
        cout << "\n";
    }
}
void pattern4(int n){
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <=i; j++ ){
            cout << i;
        }
        cout <<"\n";
    }
}
void pattern5(int n){
    for(int i = n; i > 0; i--){
        for(int j = 1; j <= i; j++){
            cout <<j;
        }
        cout << endl;
    }
}
void pattern6(int n){
   for(int i = n; i > 0; i--){
    for(int j = 1; j <= i; j++){
        cout << "*";
    }
    cout << endl;
   }
}
void pattern7(int n){
    //outer loop for rows
    for(int i = 0; i < n; i++){
        //space
        for(int j = 1; j <= n - i; j++)
            cout<<" ";
        //star
        for(int j = 1; j <= 2 * i + 1; j++)
            cout<<"*";
        //space
         for(int j = 1; j <= n - i; j++)
            cout<<" ";
        cout<<endl;
    }
    
}
int main(){
    int n = 5;
    pattern7(n);
    return 0;
}