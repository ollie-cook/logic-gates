import { Node } from '@/app/utils/types/types'

export const Network: Node[] = [
  {
    id: 'c7f4e2ca-39bf-4b9f-accf-d9d7ec5346f0',
    type: 'transistor',
    collectsFrom: '',
    baseConnectsTo: 'switch'
  },
  {
    id: 'd768e493-64e0-4b38-a6a2-d48735a23b8f',
    type: 'transistor',
    collectsFrom: 'c7f4e2ca-39bf-4b9f-accf-d9d7ec5346f0',
    baseConnectsTo: 'switch'
  },
  {
    id: 'd0943d75-51e4-467e-8ee7-c59a51a9d1fd',
    type: 'transistor',
    collectsFrom: 'd768e493-64e0-4b38-a6a2-d48735a23b8f',
    baseConnectsTo: 'switch'
  }
]

export default Network

/*,
  {
    id: '46720982-8133-4f91-ad14-4a53dfcefa91',
    type: 'transistor',
    collectsFrom: 'd0943d75-51e4-467e-8ee7-c59a51a9d1fd',
    baseConnectsTo: 'switch'
  }*/