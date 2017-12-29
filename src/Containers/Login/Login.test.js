import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';

describe('Login Conatiner', () => {
  describe('login', () => {
    let login;

    beforeEach( () => {
  login = shallow(
    <Login
      name='Jorge'
    />);
  });

  it('should exist', () => {
    expect(login).toBeDefined();
  });

  it('should match the snapshot', () => {
  expect(login).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const expectedDefault = {
      "email": "",
      "loginError": false,
      "password": ""}
    expect(login.state()).toEqual(expectedDefault);
  })
  })

  describe('mapStateToProps', () => {
    let mockStore;
    let result;

    beforeAll(() => {
      mockStore = {
        login: undefined,
        user: {
          info: {
            name: "Jorge"
          }
        },
      };
      result = mapStateToProps(mockStore);
    });

    it('should pull user name from the store', () => {
      expect(result.user.info.name).toEqual(mockStore.user.info.name);
    });
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch when loginSuccess is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.loginSuccess(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when setFavorites is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.setFavorites(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
})
