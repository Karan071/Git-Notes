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