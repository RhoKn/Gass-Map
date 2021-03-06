export const global = {
    url         :  'http://localhost:3000/',
    createUserUri   : 'users/register',
    loginUri        :  'users/login',
    getApisObject   : 'https://api.datos.gob.mx/v2/precio.gasolina.publico',
    uriRoutes   :   {
                        users:  'users/',
                        favorites: 'favs/',
                        gasStations: 'gasStations/',
                        comments    : 'comments/'
                    },
    uriMethods   :   {
                        viewAllBdGas: 'allBd',
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
