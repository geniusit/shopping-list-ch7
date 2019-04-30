import mutations from 'src/vuex/mutations'
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS, ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST } from './mutation_types'

describe('mutations.js', () => {

    var state 

    beforeEach(() => {
        state = {
            shoppinglists: []
        }
    })

    describe('ADD_SHOPPING_LIST', () => {

        it('should add item to the shopping list array and increase its length', () => {
            mutations[ADD_SHOPPING_LIST](state, {id: '1'})
            expect(state.shoppinglists).to.eql([{id: '1'}])
            expect(state.shoppinglists).to.have.length(1)
        })

    })
})