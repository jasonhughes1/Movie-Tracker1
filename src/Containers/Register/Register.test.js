import React from 'react';
import { shallow, mount } from 'enzyme';
import { Register, mapStateToProps, mapDispatchToProps } from './Register';

describe('Register Conatiner', () => {
  describe('login', () => {
    let register;

    beforeEach( () => {
  register = shallow(
    <Register
      name='Jorge'
    />);
  });

  it('should exist', () => {
    expect(register).toBeDefined();
  });

  it('should match the snapshot', () => {
  expect(register).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const expectedDefault = {
      "disabled": true,
      "email": "",
      "name": "",
      "password": "",
      "passwordError": false,
      "retypePassword": "",
      "signUpError": false
    }
    expect(register.state()).toEqual(expectedDefault);
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

      result.RegisterSuccess(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
})
