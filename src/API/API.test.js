import helper from './helper';
import mockData from './mockData';

const { 
  fetchMovies 
} = helper;

const {
  filmData
} = mockData;

describe('Fetch Movies Tests', () => {
  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            {results: filmData.results}
          )
        }));
  });

  it.skip('should be called with the correct params', async () => {
    const mockData = filmData;
    const expected = ['https://api.themoviedb.org/3/movie/now_playing?api_key=020247bf421cd580aa7ceee48b183e05'];
    
    fetchMovies();
    expect(expected).toHaveBeenCalledWith(...mockData);
  });

});
