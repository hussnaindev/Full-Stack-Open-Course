const initialState = {
    good: 0,
    bad: 0,
    neutral: 0
}

const CounterReducer = (state = initialState, action) =>
{
    console.log(state)

    switch(action.type)
    {
        case 'GOOD':
            return {
                good: state.good + 1,
                bad: state.bad,
                neutral: state.neutral
            }
        case 'BAD':
            return {
                good: state.good,
                bad: state.bad + 1,
                neutral: state.neutral
            }
        case 'NEUTRAL':
            return {
                good: state.good,
                bad: state.bad,
                neutral: state.neutral + 1
            }
        default:
            return state
    }

}

export default CounterReducer