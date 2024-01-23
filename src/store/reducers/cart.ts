import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  items: [],
  isOpen: false,
  userAddress: {
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  },
  userCard: {
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  },
  currentCheckoutStep: { step: 'Cart' }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductMenu>) => {
      const opcaoCardapio = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!opcaoCardapio) {
        state.items.push(action.payload)
      } else {
        alert(`O ${opcaoCardapio.nome} já foi adicionado ao carrinho!`)
      }
    },

    addAddress: (state, action: PayloadAction<UserAddress>) => {
      state.userAddress = action.payload
    },

    addCard: (state, action: PayloadAction<userCard>) => {
      state.userCard = action.payload
    },

    checkoutSteps: (state, action) => {
      state.currentCheckoutStep = action.payload
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    },

    resetOrder: (state) => {
      state.items = []
      state.userAddress = {
        delivery: {
          receiver: '',
          address: {
            description: '',
            city: '',
            zipCode: '',
            number: 0,
            complement: ''
          }
        }
      }
      state.userCard = {
        payment: {
          card: {
            name: '',
            number: '',
            code: 0,
            expires: {
              month: 0,
              year: 0
            }
          }
        }
      }
    }
  }
})

export const {
  add,
  addAddress,
  checkoutSteps,
  addCard,
  open,
  close,
  remove,
  resetOrder
} = cartSlice.actions
export default cartSlice.reducer
