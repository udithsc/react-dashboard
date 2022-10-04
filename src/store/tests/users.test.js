import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loadUsers, selectUsers } from '../users';
import configureStore from '../configureStore';

describe('usersSlice', () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const usersSlice = () => store.getState().users;

  const createState = () => ({
    users: {
      list: []
    }
  });

  describe('loading users', () => {
    describe('if the users exist in the cache', () => {
      it('they should not be fetched from the server again.', async () => {
        fakeAxios.onGet('/users').reply(200, [{ id: 1 }]);

        await store.dispatch(loadUsers());
        await store.dispatch(loadUsers());

        expect(fakeAxios.history.get.length).toBe(1);
      });
    });

    describe("if the users don't exist in the cache", () => {
      it('they should be fetched from the server and put in the store', async () => {
        fakeAxios.onGet('/users').reply(200, [{ id: 1 }]);

        await store.dispatch(loadUsers());

        expect(usersSlice().list).toHaveLength(1);
      });

      describe('loading indicator', () => {
        it('should be true while fetching the users', () => {
          fakeAxios.onGet('/users').reply(() => {
            expect(usersSlice().loading).toBe(true);
            return [200, [{ id: 1 }]];
          });

          store.dispatch(loadUsers());
        });

        it('should be false after the users are fetched', async () => {
          fakeAxios.onGet('/users').reply(200, [{ id: 1 }]);

          await store.dispatch(loadUsers());

          expect(usersSlice().loading).toBe(false);
        });

        it('should be false if the server returns an error', async () => {
          fakeAxios.onGet('/users').reply(500);

          await store.dispatch(loadUsers());

          expect(usersSlice().loading).toBe(false);
        });
      });
    });
  });

  describe('selectors', () => {
    it('getUnresolvedBugs', () => {
      const state = createState();
      state.users.list = [{ id: 1 }, { id: 2 }, { id: 3 }];

      const result = selectUsers(state);

      expect(result).toHaveLength(3);
    });
  });
});
