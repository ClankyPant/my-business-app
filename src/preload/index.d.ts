import { ElectronAPI } from '@electron-toolkit/preload'
import MaterialService from '../main/database/services/materialService';

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      materialService: MaterialService
    }
  }
}
