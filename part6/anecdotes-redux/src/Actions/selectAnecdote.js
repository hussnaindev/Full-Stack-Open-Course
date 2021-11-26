const selectAnecdote = () =>
{
    const Random = (max,min) =>
    {
      return Math.floor(Math.random()*(max-min+1)+min)
    }

    return(
        {
            type: 'selectAnecdote',
            number: Random(0,6)
        }
    )
}

export default selectAnecdote