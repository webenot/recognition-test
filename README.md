# Recognition test

## Grant access
1. Create Amazon Cognito `User pool`
2. Create user in this pool (we will need pool id)
3. In tab `App integration -> App clients and analytics` create app client with generated client secrets (we will client app id id)
4. Go to Amazon Cognito `Federated identities` and create identity
    - in `Authentication providers` select tab `Cognito` and enter ids for user pool from p.2 and for app client from p.3
    - get identity pool id (`identityPoolId`) from `Sample code`
5. After creating identity we have to manage permissions for identity roles (see [docs](https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html#change-the-role-associated-with-an-identity-type)).
- on a `Dashboard page` in the top right corner click `Edit identity pool`
- click `Create new role` for `Unauthenticated role`
- expand `View Details` and type new role name
- expand `View Policy Document` and click `Edit`
- in array "Action" add permissions for role
```
"recognition:*",
"s3:*",
"sqs:*",
"sns:*"
```

- click `Allow` and select created role for `Unauthenticated role`
- click `Save changes`