import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as Thunk from 'redux-thunk';
import moxios from 'moxios';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import stepsData from '../../../stubs/api/steps.json';
import feedbackData from '../../../stubs/api/feedback.json';
import { reducers } from '../../store';

import Landing from '../Landing';

const history = createBrowserHistory();

configure({ adapter: new Adapter() })

describe('mount landing page', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('render page', async () => {
    const app = mount(
      <Provider store={createStore(reducers, applyMiddleware(Thunk.default))}>
        <Router history={history}>
          <Landing />
        </Router>
      </Provider>
    );

    // @ts-ignore
    expect(app).toMatchSnapshot();

    // @ts-ignore
    await moxios.wait(jest.fn)

    await act(async () => {
      const request = moxios.requests.mostRecent()
      await request.respondWith({
        status: 200,
        response: stepsData,
      })
    })

    await act(async () => {
      const request = moxios.requests.mostRecent()
      await request.respondWith({
        status: 200,
        response: feedbackData,
      })
    })

    app.update();
    // @ts-ignore
    expect(app).toMatchSnapshot();
  })
});
