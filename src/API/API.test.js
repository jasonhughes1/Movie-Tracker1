import helper from './helper';
import mockData from './mockData';


describe('movie API call', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          results: ['array', 'of', 'movies']
        }
      )
    }));
  });

  it('should fetch movies', async () => {
    const movies = await helper.fetchMovies();
    expect(movies).toEqual([
      {"backdrop": undefined, "favorite": false, "movieid": undefined, "overview": undefined, "poster_path": undefined, "release_date": undefined, "title": undefined, "vote": undefined},
      {"backdrop": undefined, "favorite": false, "movieid": undefined, "overview": undefined, "poster_path": undefined, "release_date": undefined, "title": undefined, "vote": undefined},
      {"backdrop": undefined, "favorite": false, "movieid": undefined, "overview": undefined, "poster_path": undefined, "release_date": undefined, "title": undefined, "vote": undefined}]);
  });

  describe('user API', () => {
  it('userLogin should return user data if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {

            "data": {
              "user": "info"
            }
        }
      )
    }));
    const userData = await helper.userLogin({user: 'payload'});
    expect(userData).toEqual({"data": {"user": "info"}});
  });

});

  describe('user register API', () => {
  it('userRegister should return user data if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {

            "data": {
              "user": "info"
            }
        }
      )
    }));
    const userData = await helper.userRegister({user: 'payload'});
    expect(userData).toEqual({"data": {"user": "info"}});
  });

});

  describe('Fetch Favorites API', () => {
  it('fetchFavorites should return favorites if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          movie_id: 1244,
          user_id: 2,
          title: 'coco',
          poster_path: 'hkrorkg',
          release_date: '1992',
          vote_average: 7.8,
          overview: 'stuff happens'
        }
      )
    }));
    const favorites = await helper.fetchFavorites({user: 'payload'});
    expect(favorites).toEqual({movie_id: 1244,
          user_id: 2,
          title: 'coco',
          poster_path: 'hkrorkg',
          release_date: '1992',
          vote_average: 7.8,
          overview: 'stuff happens'});
  });

});

  describe('Receive Favorites API', () => {
  it('receiveFavorites should return favorites if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          movie_id: 1244,
          user_id: 2,
          title: 'coco',
          poster_path: 'hkrorkg',
          release_date: '1992',
          vote_average: 7.8,
          overview: 'stuff happens'
        }
      )
    }));
    const favorites = await helper.receiveFavorites({user: 'payload'});
    expect(favorites).toEqual({movie_id: 1244,
          user_id: 2,
          title: 'coco',
          poster_path: 'hkrorkg',
          release_date: '1992',
          vote_average: 7.8,
          overview: 'stuff happens'});
  });
});

  describe('Fetch Favorites API', () => {
  it('fetchFavorites should return favorites if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          movie_id: 1244,
          user_id: 2,
        }
      )
    }));
    const favorites = await helper.fetchFavorites({user: 'payload'});
    expect(favorites).toEqual({movie_id: 1244, user_id: 2});
  });

});

  describe('Delete Favorites API', () => {
  it('deleteFavorites should return favorites if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          movie_id: 1244,
          user_id: 2,
        }
      )
    }));
    const favorites = await helper.deleteFavorites({user: 'payload'});
    expect(favorites).toEqual({movie_id: 1244, user_id: 2});
  });

});
});
