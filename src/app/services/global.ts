export const global = {
    url         :  'http://localhost:3000/',
    createUserUri   : 'users/register',
    loginUri        :  'users/login',
    getApisObject   : 'https://api.datos.gob.mx/v2/precio.gasolina.publico',
    getOurData      : 'localhost:3000/gasStations/all',
    uriRoutes   :   {
                        users:  'users/',
                        favorites: 'favs/'
                    },
    uriMethods   :   {
                        viewAll: 'all',
                        viewOne:  'view/',
                        update:  'update/',
                        delete:  'delete/',
                        create: 'create'
                    },
    cookiesDef  :   {
                        token:      'Token',
                        usrType:    'UserType',
                        fullUser:       'User'
                    }
};
