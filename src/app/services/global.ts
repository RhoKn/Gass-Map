export const global = {
    url         :  'http://localhost:3000/',
    createUserUri   : 'users/register',
    loginUri        :  'users/login',
    uriRoutes   :   {
                        users:  'users/',
                        pTypes: 'pTypes/',
                        products:  'products/',
                        dTypes:  'dTypes/',
                        dishes:  'dishes/'
                    },
    uriMethods   :   {
                        create:  'create',
                        viewAll: 'all',
                        viewOne:  'view/',
                        update:  'update/',
                        delete:  'delete/'
                    },
    cookiesDef  :   {
                        token:      'Token',
                        usrType:    'UserType',
                        fullUser:       'User'
                    }
};
