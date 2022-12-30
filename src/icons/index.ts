import SvgIcon from '@/components/SvgIcon/index.vue'// svg component

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
requireAll(req)

export default (app: any): void => {
  app.component('svg-icon', SvgIcon)
}
