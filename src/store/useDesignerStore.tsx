import { Colors, Designer, DesignerColorKeys, NumberModels, ShirtModels } from '@/models'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  designer: Designer
}

interface Actions {
  changeColorModel: (color: Colors, key: DesignerColorKeys) => void
  changeShirtModel: (model: ShirtModels) => void
  changeNumberModel: (model: NumberModels) => void
}

const useDesignerStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        designer: {
          shirtModel: 'one',
          shirtBaseColor: 'violet',
          shirtModelColor: 'white',
          numberModel: 'one',
          numberBaseColor: 'black'
        },
        changeColorModel: (color, key) => {
          set((state) => ({ ...state, designer: { ...state.designer, [key]: color } }))
        },
        changeShirtModel: (model) => {
          set((state) => ({ ...state, designer: { ...state.designer, shirtModel: model } }))
        },
        changeNumberModel: (model) => {
          set((state) => ({ ...state, designer: { ...state.designer, numberModel: model } }))
        }
      }),
      { name: 'designer' }
    )
  )
)

export default useDesignerStore
