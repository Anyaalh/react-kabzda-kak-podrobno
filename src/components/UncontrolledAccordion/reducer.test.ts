import {reducer, StateType} from "./reducer";

test("state should change to true", () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})
    expect(newState.collapsed).toBe(true)
})
test("state should change to false", () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})
    expect(newState.collapsed).toBe(false)
})
test("reducer should throw error because action type is incorrect", () => {
    const state: StateType = {
        collapsed: true
    }
    expect(() => {
        reducer(state, {type: "FAKE-TYPE"})
    }).toThrowError()
})
