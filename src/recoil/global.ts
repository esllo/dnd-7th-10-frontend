import { atom } from 'recoil'
import { VariantType } from '../components/Common/Toast'

export interface IModalState {
  isModalOpen: boolean
  title: string
  description: string
  cancel?: string
  ok?: string
  onOkPress?: () => void
  onCancelPress?: () => void
}

export const modalStateAtom = atom<IModalState>({
  key: 'modal',
  default: {
    isModalOpen: false,
    title: '',
    description: ''
  }
})

export interface IHeaderMenuHandler {
  (name: string): void
}

export interface IToast {
  id?: number
  check?: boolean
  warn?: boolean
  message: string
  variant?: VariantType
  offset?: number
}

export const toastsAtom = atom<IToast[]>({
  key: 'toast',
  default: []
})
