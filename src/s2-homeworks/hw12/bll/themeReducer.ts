const initState = {
    themeId: 1,
}
type initStateType = typeof initState

export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any


export type ActionType = ReturnType<typeof changeThemeId>