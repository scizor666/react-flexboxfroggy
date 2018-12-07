import {mount} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import LevelCounter from "../LevelCounter";

const mockLevelContext = jest.fn();

jest.mock('../../context/LevelContext', () => ({
    Consumer: ({children}: any) => children(mockLevelContext())
}));

describe('Level Counter', () => {

    beforeEach(() => {
        mockLevelContext.mockReset();
    });

    [[1,24], [0, 90]].forEach(([from , to]) => {
        test(`renders level values as ${from} of ${to}`, () => {

            mockLevelContext.mockReturnValue({current: from, max: to});

            const wrapped = mount(React.createElement((LevelCounter as any).WrappedComponent)); // probably is a problem with @types for react-router
            expect(wrapped.find('.levelCounter__label').text()).toBe(`Level ${from} of ${to} ▾`);

            const tree = renderer.create(React.createElement((LevelCounter as any).WrappedComponent));
            expect(tree.toJSON()).toMatchSnapshot();
        })
    })
});
