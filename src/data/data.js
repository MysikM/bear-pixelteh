export const URL_BEARS = 'https://api.punkapi.com/v2/beers';

export const categoryBears = [
    {id: 1, name: 'beers that pair with pizza', searchCategory: 'pizza'},
    {id: 2, name: 'beers that pair with steak', searchCategory: 'steak'},
    {id: 3, name: 'all available beers', searchCategory: ''},
]
export const selectBears = [
    {id: 1, name: 'all', select: null},
    {id: 2, name: 'abv ascending', select: 'abv asc'},
    {id: 3, name: 'abv descending', select: 'abv desc'},
    {id: 4, name: 'name ascending', select: 'name asc'},
    {id: 5, name: 'name descending', select: 'name desc'},
]