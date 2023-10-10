export type ShirtModels = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight'
export type NumberModels = 'one' | 'two' | 'three' | 'four' | 'five' | 'six'

export type Colors =
  | 'yellow'
  | 'red'
  | 'blue'
  | 'green'
  | 'orange'
  | 'violet'
  | 'gray'
  | 'black'
  | 'white'
  | 'cyan'
  | 'pink'
  | 'lime'

export type DesignerColorKeys = 'shirtBaseColor' | 'shirtModelColor' | 'numberBaseColor'
export type DesignerModelKeys = 'shirtModel' | 'numberModel'

export interface Designer {
  shirtModel: ShirtModels
  shirtBaseColor: Colors
  shirtModelColor: Colors
  numberModel: NumberModels
  numberBaseColor: Colors
}
