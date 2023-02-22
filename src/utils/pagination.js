

export const paginationLogic = (pokemonsFilter, currentPage) => {
    // Cantidad de pokemons por paginas.
    const pokemonPerPage = 12;
    // Pokemon que se mostraran en la pagina actual.
    const sliceStart = (currentPage - 1) * pokemonPerPage
    const sliceEnd = sliceStart + pokemonPerPage
    const pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd)

    // última página.
    const lastPage = Math.ceil(pokemonsFilter.length / pokemonPerPage) || 1

    // Bloque Actual.
    const pagesPerBlock = 8;
    const actualBlock = Math.ceil(currentPage / pagesPerBlock)

    // Paginas que se van a mostrar en la bloque actual.
    const pagesInBlock = []
    const minPages = (actualBlock * pagesPerBlock - pagesPerBlock) + 1
    const maxPages = actualBlock * pagesPerBlock
    for (let i = minPages; i <= maxPages; i++) {
      if(i <= lastPage){
        pagesInBlock.push(i)
      }
    }
    return {pagesInBlock, lastPage, pokemonsInPage}
  }