import { atom } from 'recoil'

const StyleStore = atom({
  key: 'style',
  default: {
    global: {
      background: '#141414',
	  text:"#ffffff"
    },
  },
})

export default StyleStore
